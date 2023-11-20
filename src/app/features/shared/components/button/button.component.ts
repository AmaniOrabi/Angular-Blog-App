import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() ctaText: string = '';
  @Input() ctaColor: string = 'primary';
  @Input() ctaIcon: string = '';
  @Input() ctaClass: string = '';
  @Input() ctaIconColor: string = '';

  @Output() onButtonCLicked = new EventEmitter<void>();

  buttonCLicked() {
    this.onButtonCLicked.emit();
  }
}
