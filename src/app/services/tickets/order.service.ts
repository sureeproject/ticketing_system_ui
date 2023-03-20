import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Order } from 'src/app/model/order.model';
import { Observable, Subject } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  

  constructor(private http: HttpClient) {
    
  }

  createOrder(userId : number,ticketId : number) {
    var url = environment.rooturl + AppConstants.ORDER_CREATE_URL.replace(/{userId}/g, userId.toString());
    url = url.replace(/{ticketId}/g, ticketId.toString());
    console.log(url);
    return this.http.post(url,{ observe: 'response'});
  }

  getOrders(userId : number){
    var url = environment.rooturl + AppConstants.ORDER_URL.replace(/{userId}/g, userId.toString());
    return this.http.get(url,{ observe: 'response'});
  }

}
