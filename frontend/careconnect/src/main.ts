import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Start the Angular app using a standalone root component and shared app config.
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
