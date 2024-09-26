import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonName!: string;
  @Input() isButtonDisable: boolean | string = true;
  @Output() buttonClick = new EventEmitter<void>();

  /**
  * Method to emit the button click event
  */
  onClick(): void {
    this.buttonClick.emit();
  }

}
