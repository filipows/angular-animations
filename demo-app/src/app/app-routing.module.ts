import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoMainComponent } from './demo-main/demo-main.component';
import { DemoOnEnterOnLeaveComponent } from './demo-on-enter-on-leave/demo-on-enter-on-leave.component';
import { ExperimentsComponent } from './experiments/experiments.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoMainComponent
  },
  {
    path: 'enter-leave',
    component: DemoOnEnterOnLeaveComponent
  },
  {
    path: 'experiments',
    component: ExperimentsComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
