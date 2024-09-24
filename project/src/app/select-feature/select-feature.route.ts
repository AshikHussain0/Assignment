import { Routes } from '@angular/router';
import { SelectFeatureComponent } from './select-feature.component';


export const selectFeatureRoutes: Routes = [
  {
    path: '',
    component: SelectFeatureComponent,
    children: [
      {
        path: '',
        redirectTo: 'select-feature',
        pathMatch: 'full',
      },
    ],
  },
];
