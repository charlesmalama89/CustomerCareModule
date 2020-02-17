import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ticketDTO } from '../models/ticket.dto';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Products } from '../models/products.model';
import { Department} from '../models/departments.model'


const BASE_URL = "https://hobbiton-customer-care-api.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  


  constructor(private http: HttpClient) {}

  

  
  
  addTicket(ticket: ticketDTO): Observable<ticketDTO> {
    return this.http.post<ticketDTO>(`${BASE_URL}/tickets`, ticket);
  }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${BASE_URL}/tickets`);
  }

  getTicketsByStatus(): Observable<Ticket[]>{
      return this.http.get<Ticket[]>(`${BASE_URL}/pending-tickets`);
   
  }

  getTicketsByStatusClosed(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${BASE_URL}/closed-tickets/Closed`);
  
  }

  getAssignedTickets(id: number): Observable<Ticket[]>{
    console.log("*********************")
    console.log(id);
    return this.http.get<Ticket[]>(`${BASE_URL}/pending-tickets/${id}`)
  }

  getOverDueTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${BASE_URL}/over-due-tickets`);

  }

  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`${BASE_URL}/products`);
  }

  getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(`${BASE_URL}/departments`);
  }

  updateTicketComment(id: number, ticket: ticketDTO): Observable<Ticket>{
    return this.http.patch<Ticket>(`${BASE_URL}/tickets/${id}`, ticket);
  }

}
