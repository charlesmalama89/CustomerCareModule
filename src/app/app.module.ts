import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData,CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { ClosedTicketsComponent } from './pages/closed-tickets/closed-tickets.component';
import { OverDueTicketsComponent } from './pages/over-due-tickets/over-due-tickets.component';
import { PendingTicketsComponent } from './pages/pending-tickets/pending-tickets.component';
import { AssignedTicketsComponent } from './pages/assigned-tickets/assigned-tickets.componet';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AccessTokenInterceptor } from './interceptor/access-token.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { AlertComponent } from './alert/alert.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    OpenTicketComponent,
    TicketListComponent,
    AssignedTicketsComponent,
    ClosedTicketsComponent,
    OverDueTicketsComponent,
    PendingTicketsComponent,
    AuthenticationComponent,
    DashboardComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
