import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourceListPageComponent } from './pages/resource-list/resource-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourceListPageComponent },
  { path: '**', redirectTo: '' }
];
