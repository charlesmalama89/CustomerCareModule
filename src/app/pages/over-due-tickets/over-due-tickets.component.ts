import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketsService } from 'src/app/services/tickets.service';
import { ticketDTO } from 'src/app/models/ticket.dto';

@Component({
  selector: 'app-over-due-tickets',
  templateUrl: './over-due-tickets.component.html',
  styleUrls: ['./over-due-tickets.component.scss']
})
export class OverDueTicketsComponent implements OnInit {

  
  searchValue = "";

  tickets: Ticket[] = [];
  searchTickets: Ticket[] = [];
  selectedTicket: Ticket;
  closeTicketComment: string = "";

  loading = true;
  isVisible = false;
  isVisibleV = false;

  isLoadingTwo = false;

  updatingTicket = false;

  showModal(ticket: Ticket): void {
    this.isVisibleV = true;
    this.selectedTicket = ticket;
  }

  showCommentModal(ticket: Ticket): void {
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

  handleOkView(): void {
    console.log('Button ok clicked!');
    this.isVisibleV = false;
  }

  handleCancelView(): void {
    console.log('Button cancel clicked!');
    this.isVisibleV = false;
  }


  closeTicket(ticket: Ticket) {
    this.updatingTicket = true;
    const updateTicket: ticketDTO = { ...ticket };
    this.ticketService.updateTicketComment(ticket.id, updateTicket).subscribe((data) => {
      console.log(data);
      this.updatingTicket = false;
      this.isVisible = false;
    });
  }

  validateForm: FormGroup;

  submitForm(ticket: Ticket): void {
    console.log(ticket)
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      // this.isVisible = false;
      ticket.closeTicketComment = this.closeTicketComment;
      this.closeTicket(ticket);
    }
    
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



  constructor(private ticketService: TicketsService, private fb: FormBuilder) {}

  ngOnInit(): void {
   this.ticketService.getOverDueTickets().subscribe((data) => {
    console.log('TICKETS');
    console.log(data);
    this.tickets = data;
    this.searchTickets = data;
    this.loading = false;
    this.selectedTicket = data[0];
   });
   this.validateForm = this.fb.group({
    closeTicketComment: ['', [Validators.required]]
  });

  }
}
