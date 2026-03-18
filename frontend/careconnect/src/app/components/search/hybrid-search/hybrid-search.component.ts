import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hybrid-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hybrid-search.component.html'
})
export class HybridSearchComponent {
  searchQuery = '';

  executeSearch(): void {
    // Placeholder for future search integration.
    console.log('Search query:', this.searchQuery);
  }
}
