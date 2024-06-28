import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  {
    path: 'table',
    loadChildren: () => import('./table/table.routes').then(m => m.routes),
  },
  {
    path: 'grid-list',
    loadChildren: () => import('./grid-list/grid-list.routes').then(m => m.routes),
  },
];
