import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { TicketService } from 'src/app/services/tickets/ticketservice.service';
import { Ticket } from 'src/app/model/ticket.model';


@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.less'],
  providers: [TicketService]
})
export class StripePaymentComponent implements OnInit {

  @Input('ticket')
  ticket = new Ticket();

  @Output('ticketSoldOut')
  soldEmitter = new EventEmitter<Ticket>();

  constructor(private ticketService: TicketService) {
    
   }
  handler: any = null;

  ngOnInit() {
    this.loadStripe();
  }

  pay() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Mh6L6SJAS0cJriJ5rgSiRybxkP3V4CxP48uZLOxmqQ3U2rT4E8Tqgb3WYG660ykiRrY6tiHUWPZ364p0HsK49Ug001WkdcOmT',
      locale: 'auto',
      token: (token: any) => {
        console.log(token);
        // Use an arrow function to preserve the context of 'this'
        console.log(this.ticket.id);
        this.ticket.status = "SOLDOUT";
        this.ticketService.updateTicket(this.ticket.id, this.ticket)
          .subscribe((responseData: HttpResponse<any>) => {
            this.ticket = <any>responseData.body;
            //this.router.navigate(['buyticket']);
            this.soldEmitter.emit(this.ticket);
          });
      }
    });

    handler.open({
      name: this.ticket.name,
      description: '2 widgets',
      amount: this.ticket.price * 100
    });

   

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Mh6L6SJAS0cJriJ5rgSiRybxkP3V4CxP48uZLOxmqQ3U2rT4E8Tqgb3WYG660ykiRrY6tiHUWPZ364p0HsK49Ug001WkdcOmT',
          locale: 'auto',
          token: function (token: any) {
            
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
}