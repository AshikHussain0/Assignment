import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'map-assets',
    loadChildren: () =>
      import('./map-assests/map-assets.module').then((m) => m.MapAssetsModule),
  },
  {
    path: 'select-feature',
    loadChildren: () =>
      import('./select-feature/select-feature.module').then((m) => m.SelectFeatureModule),
  },
  {
    path: '',
    redirectTo: 'select-feature',
    pathMatch: 'full',
  },
];
