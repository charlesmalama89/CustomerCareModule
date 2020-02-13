import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OpenTicketComponent } from "./pages/open-ticket/open-ticket.component";
import { TicketListComponent } from "./pages/ticket-list/ticket-list.component";
import { PendingTicketsComponent } from "./pages/pending-tickets/pending-tickets.component";
import { ClosedTicketsComponent } from "./pages/closed-tickets/closed-tickets.component";
import { OverDueTicketsComponent } from "./pages/over-due-tickets/over-due-tickets.component";
import { AssignedTicketsComponent } from "./pages/assigned-tickets/assigned-tickets.componet";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'dashboard' },
  { path: "login", pathMatch: "full", component: AuthenticationComponent},
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", 
        pathMatch: "full", 
        component: TicketListComponent,
        canActivate: [AuthGuard],

      },
      { path: "ticketList", 
        pathMatch: "full", 
        component: TicketListComponent,
        canActivate: [AuthGuard],

      },
      { path: "openTicket", 
        pathMatch: "full", 
        component: OpenTicketComponent,
        canActivate: [AuthGuard], 
      },
      {
        path: "assignedTickets",
        pathMatch: "full",
        component: AssignedTicketsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "viewOpenTickets",
        pathMatch: "full",
        component: PendingTicketsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "viewAClosedTickets",
        pathMatch: "full",
        component: ClosedTicketsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "viewOverDueTickets",
        pathMatch: "full",
        component: OverDueTicketsComponent,
        canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
