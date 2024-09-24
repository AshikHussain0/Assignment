import { Component, HostListener } from '@angular/core';
import { INavData } from '@coreui/angular';

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

  constructor() {
    this.checkScreenSize();
    this.sidebar = [{
      name: 'Settings',
      url: 'emissions',
    },]
  }

  // Check screen size on resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  // Update property based on screen width
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 992;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
