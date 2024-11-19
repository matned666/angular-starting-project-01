import {AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit{
  // @ViewChild('form') form? : ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log("ON INIT");
  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
  }


  onSubmit(titleInput: string, requestInput: string) {
    console.log('title:' + titleInput);
    console.log('req:' + requestInput);

    this.form().nativeElement.reset();
  }
}
