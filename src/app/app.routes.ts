import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/table/table.component').then(
        (c) => c.TableComponent
      ),
  },
];
