import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourceListPageComponent } from './pages/resource-list-page/resource-list-page.component';

// Client-side routes for the app shell.
export const routes: Routes = [
  // Landing page.
  { path: '', component: HomeComponent },
  // Resource listing page.
  { path: 'resources', component: ResourceListPageComponent },
  // Fallback for unknown URLs.
  { path: '**', redirectTo: '' }
];
