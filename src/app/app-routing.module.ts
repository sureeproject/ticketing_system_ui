import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
// import { ContactComponent } from './components/contact/contact.component';
 import { LoginComponent } from './components/login/login.component';
 import { LogoutComponent } from './components/logout/logout.component';
// import { AccountComponent } from '../app/components/account/account.component';
// import { BalanceComponent } from '../app/components/balance/balance.component';
// import { NoticesComponent } from './components/notices/notices.component';
// import { LoansComponent } from './components/loans/loans.component';
// import { CardsComponent } from './components/cards/cards.component';
 import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';
// import { HomeComponent } from './components/home/home.component';
import { BuyticketsComponent } from './components/buytickets/buytickets.component';
import { SellticketsComponent } from './components/selltickets/selltickets.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HeaderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'buyticket', component: BuyticketsComponent, canActivate: [AuthActivateRouteGuard]},
  { path: 'sellticket', component: SellticketsComponent, canActivate: [AuthActivateRouteGuard]},
  { path: 'logout', component: LogoutComponent},
  { path: 'myOrders', component: OrderComponent, canActivate: [AuthActivateRouteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
