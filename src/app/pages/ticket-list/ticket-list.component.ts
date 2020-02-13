import { Component, OnInit } from "@angular/core";
import { Ticket } from "src/app/models/ticket.model";
import { TicketsService } from "src/app/services/tickets.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"]
})
export class TicketListComponent implements OnInit {
 
  searchValue = "";

  tickets: Ticket[] = [];
  searchTickets: Ticket[] = [];
  selectedTicket: Ticket;

  loading = true;
  isVisible = false;

  showModal(ticket: Ticket): void {
    this.isVisible = true;
    this.selectedTicket = ticket;
  }

  handleOk(): void {
    console.log("Button ok clicked!");
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.searchTickets = this.tickets.filter(ticket =>
      ticket.ticketNum.toString().includes(this.searchValue) || ticket.phone.toString().includes(this.searchValue) || 
      ticket.status.toString().includes(this.searchValue) || ticket.product.toString().includes(this.searchValue) || 
      ticket.department.toString().includes(this.searchValue)
    );
  }

  constructor(private ticketService: TicketsService) {}

  ngOnInit() {
    this.ticketService.getTickets().subscribe(data => {
      console.log(data);
      this.tickets = data;
      this.searchTickets = data;
      this.loading = false;
      this.selectedTicket = data[0];
    });
  }
}
