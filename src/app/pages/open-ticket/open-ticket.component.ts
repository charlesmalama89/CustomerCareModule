import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/models/ticket.model';
import { Products } from 'src/app/models/products.model'
import { Department } from 'src/app/models/departments.model';
import { ticketDTO } from 'src/app/models/ticket.dto';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.scss']
})
export class OpenTicketComponent implements OnInit {


  isLoadingOne = false;
  isLoadingTwo = false;
  userItems: any;

  loadOne(): void {
    this.isLoadingOne = true;

    // What is this for??
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;

    // What is this for??
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

  validateForm: FormGroup;

  submitForm(value: any): void {
    // console.log(value);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

   
    if(this.validateForm.valid){
        this.saveTicket(value);
        this.resetForm();
    }
  }

  saveTicket(ticket: ticketDTO): void {
    this.userItems = this.getFromLocalStrorage();
    const email = this.userItems.email;
    console.log(email);
    ticket.createdBy = email;
    console.log(ticket)
    this.ticketService.addTicket(ticket).subscribe((data) => {
      console.log(data)
    });
    //console.log(results);
  }

  resetForm(): void {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  public getFromLocalStrorage() {
    const users = JSON.parse(localStorage.getItem('currentUser'));
    console.log('============');
    console.log(users);
    return users;
    }


  constructor(private ticketService: TicketsService, private fb: FormBuilder) {}

  tickets: Ticket[] = [];
  productList: Products[] = [];
  departmentList: Department[] = [];

  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]], 
      product: ['', Validators.required],
      department: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      email: ['', [Validators.nullValidator]]
    });

    

    this.ticketService.getTickets().subscribe((data) => {
      console.log(data);
    this.tickets = data;
    })

    this.ticketService.getProducts().subscribe((data) => {
      console.log(data);
      this.productList = data;
    })

    this.ticketService.getDepartments().subscribe((data) => {
      console.log(data);
      this.departmentList = data;
    })
  }

  
}
