import { Component, HostListener } from '@angular/core';
import { INavData } from '@coreui/angular';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  sidebar!: INavData[];
  isSmallScreen: boolean = false;
  isSidebarVisible: boolean = true;
  showSpinner: boolean = false;

  constructor(private sharedService: SharedService) {
    this.checkScreenSize();
    this.sidebar = [{
      name: 'Settings',
      url: 'emissions',
    },];
    this.sharedService.spinnerStatus.subscribe(status => {
      this.showSpinner = status;
    });
  }

/**
  * Method to check screen size on resize
  * @param event: resize event
  */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

/**
  * Method to update property based on screen width
  */
  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 992;
  }

  /**
  * Method to toggle sidebar
  */
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
