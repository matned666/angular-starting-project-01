import { Component } from '@angular/core';
import {SubmitButtonComponent} from "../../../shared/submit-button/submit-button.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
    imports: [
        SubmitButtonComponent
    ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
