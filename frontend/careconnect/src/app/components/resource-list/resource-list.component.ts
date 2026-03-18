import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';

// Displays resources and manages loading/error states for this screen.
@Component({
  selector: 'app-resource-list',
  standalone: true,
  // CommonModule is required for structural directives like *ngIf and *ngFor.
  imports: [CommonModule],
  templateUrl: './resource-list.component.html'
})
export class ResourceListComponent implements OnInit {
  // Holds API results when the request succeeds.
  resources: Resource[] = [];
  // Controls loading indicator visibility.
  isLoading = true;
  // Stores user-friendly error text when request fails.
  errorMessage = '';

  // Inject service used to call backend API.
  constructor(private readonly resourceService: ResourceService) {}

  // Load data once when component is initialized.
  ngOnInit(): void {
    this.resourceService.getResources().subscribe({
      // Success path: render data and stop loading state.
      next: (data) => {
        this.resources = data;
        this.isLoading = false;
      },
      // Error path: show message and stop loading state.
      error: () => {
        this.errorMessage = 'Unable to load resources. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  // Helps Angular reuse DOM nodes during list updates.
  trackByResourceId(_: number, resource: Resource): number {
    return resource.id;
  }
}
