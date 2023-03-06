
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { LoginTicketSystemComponent } from './components/login-ticket-system/login-ticket-system.component';


const appRoutes : Routes = [
  {path: 'login', component: LoginTicketSystemComponent},
  {path: 'logout', component: StripePaymentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginTicketSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
