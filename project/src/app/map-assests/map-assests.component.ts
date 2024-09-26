import { Component } from '@angular/core';
import { Plants, ProcessDetails } from '../shared/shared.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-map-assests',
  templateUrl: './map-assests.component.html',
  styleUrl: './map-assests.component.scss'
})
export class MapAssestsComponent {
  processDetails!: ProcessDetails[];
  plants!: Plants[];
  assetLevel!: string;
  selectedIndex!: number;

  constructor(private sharedService: SharedService) {
    this.processDetails = this.sharedService.processDetails;
    this.assetLevel = this.sharedService.assetLevel;
    this.plants = this.sharedService.processDetails[0].plants;
    this.selectedIndex = 0;
  }

  /**
  * Method to select site and assign plants of selected site
  * @param index: index number
  */
  selectSite(index: number): void{
    this.plants = this.sharedService.processDetails[index].plants;
    this.selectedIndex = index;
  }

}
