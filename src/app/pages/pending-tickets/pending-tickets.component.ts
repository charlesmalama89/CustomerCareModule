import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketsService } from 'src/app/services/tickets.service';
import { ticketDTO } from 'src/app/models/ticket.dto';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.scss']
})
export class PendingTicketsComponent implements OnInit {

  
  searchValue = "";

  tickets: Ticket[] = [];
  searchTickets: Ticket[] = [];
  selectedTicket: Ticket;
  closeTicketComment: string = "";

  loading = true;
  isVisible = false;
  isVisibleCommentModal = false;

  isLoadingTwo = false;

  updatingTicket = false;

  showViewModal(ticket: Ticket): void {
    console.log('Show View Modal!!!!');
    this.isVisible = true;
    this.selectedTicket = ticket;
  }

  showCommentModal(ticket: Ticket): void {
    console.log('Show Comment Modal!!!!');
    this.isVisibleCommentModal = true;
    this.selectedTicket = ticket;
  }
  
  handleOk(): void{
    console.log('Button Okay Clicked');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  handleCancelComment(): void {
    console.log('Comment Button cancel clicked!');
    this.isVisibleCommentModal = false;
  }


  closeTicket(ticket: Ticket) {
    this.updatingTicket = true;
    const updateTicket: ticketDTO = { ...ticket };
    this.ticketService.updateTicketComment(ticket.id, updateTicket).subscribe((data) => {
      console.log(data);
      this.updatingTicket = false;
      this.isVisibleCommentModal = false;
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

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
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
    this.ticketService.getTicketsByStatus().subscribe((data) => {
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
