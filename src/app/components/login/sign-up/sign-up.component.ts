import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent {
  email: string = "";
  password: string = "";

  onSubmit() {
    console.log('Login form submitted.');
  }
}
