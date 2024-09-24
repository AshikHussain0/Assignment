import { Component } from '@angular/core';

@Component({
  selector: 'app-select-feature',
  templateUrl: './select-feature.component.html',
  styleUrl: './select-feature.component.scss'
})
export class SelectFeatureComponent {
  options = ['Company', 'Site', 'Plant', 'Process'];
  selectedOption!: string;

  onSelect(option: string) {
    this.selectedOption = option;
  }
}
