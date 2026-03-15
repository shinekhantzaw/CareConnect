import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Simple landing page component with a call-to-action button.
@Component({
  selector: 'app-home',
  standalone: true,
  // Needed for the routerLink directive in the template.
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
