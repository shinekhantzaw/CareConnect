import { Component } from '@angular/core';
import { ResourceListComponent } from '../../components/resource-list/resource-list.component';

// Page wrapper component for the resource list feature.
@Component({
  selector: 'app-resource-list-page',
  standalone: true,
  // Compose the page from smaller reusable components.
  imports: [ResourceListComponent],
  templateUrl: './resource-list-page.component.html'
})
export class ResourceListPageComponent {}
