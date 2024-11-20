import { Component } from '@angular/core';
import {DashboardItemComponent} from "../dashboard-item/dashboard-item.component";
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {TicketModel} from "./ticket.model";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    DashboardItemComponent,
    NewTicketComponent,
    TicketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: TicketModel[] = [];


  onAddNewTicket(ticketData: { title: string; text: string }) {
    this.tickets.push({
      title: ticketData.title,
      request: ticketData.text,
      id:this.tickets.length.toString(),
      status: 'open'
    })
  }
}
