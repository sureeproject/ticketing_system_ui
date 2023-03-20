import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/tickets/ticketservice.service';
import { User } from 'src/app/model/user.model';
import { TicketStatus } from 'src/app/constants/ticket-status.enum';
import { OrderService } from 'src/app/services/tickets/order.service';

@Component({
  selector: 'app-buytickets',
  templateUrl: './buytickets.component.html',
  styleUrls: ['./buytickets.component.less']
})
export class BuyticketsComponent  implements OnInit {


  tickets = new Array();
  currentPage=0;
  size=10;


  constructor(private ticketService: TicketService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.ticketService.getTickets(this.currentPage).subscribe(
      responseData => {
      this.tickets = <any> responseData.body;
      });
  }

  onTicketSoldOut(ticket : Ticket){
    if(ticket.status == TicketStatus.SOLDOUT){
      const userDetails = JSON.parse(JSON.stringify(window.sessionStorage.getItem("userdetails")));
      const userId = JSON.parse(userDetails).id;  
      this.orderService.createOrder(userId,ticket.id)
    }
  }
  previous(){
    if(this.currentPage > 0){
      this.currentPage = this.currentPage - 1;
      this.ticketService.getTickets(this.currentPage).subscribe(
        responseData => {
        this.tickets = <any> responseData.body;
        });
    }
    
  }
  next(){
    this.currentPage = this.currentPage + 1;
    this.ticketService.getTickets(this.currentPage).subscribe(
      responseData => {
      this.tickets = <any> responseData.body;
      });
  }

}
