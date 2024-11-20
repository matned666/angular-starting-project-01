import {Component, input, Input, output, signal} from '@angular/core';
import { TicketModel } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<TicketModel>({
    alias : 'ticketData', //not recommended
    // transform: (value) => {null} check it out
  });
  detailsVisible = signal(false);
  close = output();

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAscompleted() {
    console.log("Mark as completed: " + this.ticket().status)
    this.close.emit();
  }
}
