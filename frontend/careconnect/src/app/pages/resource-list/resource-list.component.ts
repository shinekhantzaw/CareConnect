import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { NavbarComponent } from '../../components/layout/navbar/navbar.component';
import { Resource } from '../../core/models/resource.model';
import { ResourceService } from '../../core/services/resource.service';

@Component({
  selector: 'app-resource-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './resource-list.component.html'
})
export class ResourceListPageComponent {
  private readonly resourceService = inject(ResourceService);

  readonly resources: Resource[] = this.resourceService.getResources();

  trackByResourceId(_: number, resource: Resource): number {
    return resource.id;
  }
}
