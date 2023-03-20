import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ticket } from 'src/app/model/ticket.model';
import { Observable, Subject } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  

  constructor(private http: HttpClient) {
    
  }

  createTicket(ticket: Ticket) {
    return this.http.post(environment.rooturl + AppConstants.TICKET_CREATE_URL,ticket,{ observe: 'response'});
  }

  getTickets(currentPage: number){
    return this.http.get(environment.rooturl + AppConstants.AVALIABLE_TICKETES+'?page='+currentPage,{ observe: 'response'});
  }

  updateTicket(id: number,ticket : Ticket){
    var url = environment.rooturl + AppConstants.UPDATE_TICKET.replace(/{id}/g, id.toString());
    return this.http.put( url,ticket,{ observe: 'response'});
  }
}
