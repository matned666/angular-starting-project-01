import {
  afterNextRender,
  afterRender,
  Component, contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  '(click)' : 'onClick()'

  }
})
export class ControlComponent {
  label = input.required<string>();
  private elemele = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor(){
    afterRender(() => {
      console.log('afterRender - after each render - many times');
    })
    afterNextRender(() => {
      console.log('after next render - only after next render - once');
    })
  }

  onClick() {
    console.log(this.control()?.nativeElement.value);
  }
}
