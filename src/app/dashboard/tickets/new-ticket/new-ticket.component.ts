import { Component } from '@angular/core';
import {ButtonComponent} from "../../../shared/submit-button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  onSubmit(titleInput: string, requestInput: string) {

    console.log(titleInput);
    console.log('req:' + requestInput);
  }
}
