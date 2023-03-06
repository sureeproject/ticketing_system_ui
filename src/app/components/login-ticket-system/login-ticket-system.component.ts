import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-login-ticket-system',
  templateUrl: './login-ticket-system.component.html',
  styleUrls: ['./login-ticket-system.component.less']
})
export class LoginTicketSystemComponent {

  email: string = "";
  password: string = "";

  onSubmit() {
    console.log('Login form submitted.');
  }

}
