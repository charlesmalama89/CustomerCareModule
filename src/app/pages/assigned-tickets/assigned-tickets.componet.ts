import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket.model';
import { ticketDTO } from 'src/app/models/ticket.dto';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.scss']
})
export class AssignedTicketsComponent implements OnInit {

  searchValue = "";

  tickets: Ticket[] = [];
  searchTickets: Ticket[] = [];
  selectedTicket: Ticket;

  closeTicketComment: string = "";

  loading = true;
  isVisibleClosing = false;
  isVisibleV = false;

  isLoadingTwo = false;

  updatingTicket = false;
  ticketService: any;
  userItems: any;

  

  showModal(ticket: Ticket): void {
    this.isVisibleV = true;
    this.selectedTicket = ticket;
  }

  showClosingModal(ticket: Ticket): void {
    this.isVisibleClosing = true;
    this.selectedTicket = ticket;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleClosing = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleClosing = false;
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
    console.log(updateTicket);
    
    this.AssignedTicketService.updateTicketComment(ticket.id, updateTicket).subscribe((data) => {
      console.log(data);
      this.updatingTicket = false;
      this.isVisibleClosing = false;
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
      this.userItems = this.getFromLocalStrorage();
      const email = this.userItems.email;
      console.log('---CLOSED BY---');
      console.log(email);
      

      ticket.closedBy = email;
      ticket.closeTicketComment = this.closeTicketComment;
      console.log(ticket);
      
      this.closeTicket(ticket);
    }
    
  }


  public getFromLocalStrorage() {
    const users = JSON.parse(localStorage.getItem('currentUser'));
    console.log('============');
    console.log(users);
    return users;
    }



  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.searchTickets = this.tickets.filter(ticket =>
      ticket.ticketNum.toString().includes(this.searchValue)
    );
  }

  constructor(private AssignedTicketService: TicketsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userItems = this.getFromLocalStrorage();
    const id = this.userItems.id;
    console.log(id);
    this.AssignedTicketService.getAssignedTickets(id).subscribe((data) => {
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
