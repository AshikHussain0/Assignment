import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Output() selectedOption = new EventEmitter<string>();
  @Input() placeholder!: string;
  selectedValue: string = '';


  onOptionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedValue = selectElement.value;
    this.selectedOption.emit(this.selectedValue);
  }
}
