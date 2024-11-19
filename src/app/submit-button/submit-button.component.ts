import {Component, input} from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  buttonText = input.required<string>();
  signClass = input.required<string>();
  sign = input<string>();
}
