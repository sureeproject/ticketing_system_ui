import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket.model';
import { NgForm } from '@angular/forms';
import { TicketService } from 'src/app/services/tickets/ticketservice.service';
import { Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-selltickets',
  templateUrl: './selltickets.component.html',
  styleUrls: ['./selltickets.component.less']
})
export class SellticketsComponent  implements OnInit {

  ticket = new Ticket();

  constructor(private ticketService: TicketService, private router: Router) {
    
  }

  ngOnInit() {
   
  }

  createTicket(ticketForm: NgForm) {
    this.ticketService.createTicket(this.ticket)
    .subscribe(
      responseData => {
        this.ticket = <any> responseData.body;
        this.router.navigate(['buyticket']);
      });
  }

}