import {Component, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.Emulated // lub None, jeśli wymagane
})

export class ButtonComponent {
}
