import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./component-inputs-solution/component-inputs.component')
}];
