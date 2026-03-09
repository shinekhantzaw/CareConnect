import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Root layout component that contains navigation and route outlet.
@Component({
  selector: 'app-root',
  standalone: true,
  // Router directives used directly in the template because this is standalone.
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html'
})
export class AppComponent {}
