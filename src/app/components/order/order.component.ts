import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/tickets/ticketservice.service';
import { User } from 'src/app/model/user.model';
import { TicketStatus } from 'src/app/constants/ticket-status.enum';
import { OrderService } from 'src/app/services/tickets/order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {


  orders = new Array();


  constructor(private ticketService: TicketService, private orderService: OrderService) { }

  ngOnInit(): void {
    const userDetails = JSON.parse(JSON.stringify(window.sessionStorage.getItem("userdetails")));
    const userId = JSON.parse(userDetails).id;
    this.orderService.getOrders(userId).subscribe(
      responseData => {
        this.orders = <any>responseData.body;
      });
  }
  onTicketSoldOut(ticket : Ticket){
    if(ticket.status == TicketStatus.SOLDOUT){
      const userDetails = JSON.parse(JSON.stringify(window.sessionStorage.getItem("userdetails")));
      const userId = JSON.parse(userDetails).id;  
      this.orderService.createOrder(userId,ticket.id).subscribe(
        responseData => {
          console.log(responseData.body)
        });
    }
  }

}
