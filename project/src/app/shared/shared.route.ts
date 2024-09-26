import { Routes } from '@angular/router';

export const emissionsRoutes: Routes = [

  {
    path: '',
    component: EmissionsComponent,
    children: [
      {
        path: 'supplier-performance',
        component: SupplierPerformanceComponent,
      },
      {
        path: '',
        redirectTo: 'supplier-performance',
        pathMatch: 'full',
      },
    ],
  },
];

