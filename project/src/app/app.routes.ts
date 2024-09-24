import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'select-feature',
  loadChildren: () =>
    import('./select-feature/select-feature.module').then((m) => m.SelectFeatureModule),
},

{
    path: 'map-assets',
    loadChildren: () =>
      import('./map-assests/map-assets.module').then((m) => m.MapAssetsModule),
  },
{
  path: '',
  redirectTo: 'select-feature',
  pathMatch: 'full',
},
{
  path: '**',
  redirectTo: 'select-feature',
},
];
