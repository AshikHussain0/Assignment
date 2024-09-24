import { Routes } from '@angular/router';
import { MapAssestsComponent } from './map-assests.component';


export const mapAssetsRoutes: Routes = [
  {
    path: '',
    component: MapAssestsComponent,
    children: [
      {
        path: '',
        redirectTo: 'map-assets',
        pathMatch: 'full',
      },
    ],
  },
];
