import { Routes } from '@angular/router';
import { ContainerComponent } from './shared/layout/container/container.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent, // diseño general
    children: [
      {
        path: 'ejemplo-1',
        loadComponent: () =>
          import('./example-1/example-1.component').then(
            (x) => x.Example1Component
          ),
      },
      {
        path: 'ejemplo-2',
        loadComponent: () =>
          import('./example-2/example-2.component').then(
            (x) => x.Example2Component
          ),
      },
      {
        path: 'ejemplo-3',
        loadComponent: () =>
          import('./example-3/example-3.component').then(
            (x) => x.Example3Component
          ),
      },

      { path: '**', pathMatch: 'full', redirectTo: 'ejemplo-3' },
    ],
  },
];
