import {Component, input, Input, signal} from '@angular/core';
import { TicketModel } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<TicketModel>();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.update(wasVisible => !wasVisible);
  }

}
