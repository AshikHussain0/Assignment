import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-feature',
  templateUrl: './select-feature.component.html',
  styleUrl: './select-feature.component.scss'
})
export class SelectFeatureComponent {
  options = ['Company', 'Site', 'Plant', 'Process'];
  selectedOption!: string;

  constructor(private sharedService: SharedService, private router:Router) {

  }

  /**
  * Method to get the selected option
  * @param option: string
  */
  onSelect(option: string): void {
    this.selectedOption = option;
    this.sharedService.assetLevel = this.selectedOption;
  }

  /**
  * Method to redirect to map asset
  */
  updateAssetLevel(): void {
    this.router.navigate(['/map-assets'])
  }
}
