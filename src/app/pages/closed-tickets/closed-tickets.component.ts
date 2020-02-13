import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-closed-tickets',
  templateUrl: './closed-tickets.component.html',
  styleUrls: ['./closed-tickets.component.scss']
})
export class ClosedTicketsComponent implements OnInit {

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
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
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


  constructor(private readonly closedTicketsService: TicketsService) { }

  ngOnInit() {
    this.closedTicketsService.getTicketsByStatusClosed().subscribe((data) => {
      console.log(data);
      this.tickets = data;
      this.searchTickets = data;
      this.loading = false;
      this.selectedTicket = data[0];
    })
  }

}
