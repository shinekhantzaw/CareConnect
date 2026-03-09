import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

// Global providers for the whole Angular application.
export const appConfig: ApplicationConfig = {
  providers: [
    // Slightly optimize change detection by grouping DOM events.
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Enable client-side routing.
    provideRouter(routes),
    // Enable HttpClient injection for API requests.
    provideHttpClient()
  ]
};
