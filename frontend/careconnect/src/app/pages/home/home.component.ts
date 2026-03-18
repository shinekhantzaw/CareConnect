import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { NavbarComponent } from '../../components/layout/navbar/navbar.component';
import { HybridSearchComponent } from '../../components/search/hybrid-search/hybrid-search.component';
import { EmergencyBannerComponent } from '../../components/ui/emergency-banner/emergency-banner.component';

interface CategoryCard {
  name: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, HybridSearchComponent, EmergencyBannerComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly categories: CategoryCard[] = [
    {
      name: 'Food',
      description: 'Meals, pantry support, and grocery help across the city.',
      route: '/resources',
      icon: 'M3.5 12h17M7 8h10M6 16h12'
    },
    {
      name: 'Housing',
      description: 'Emergency shelter, rapid rehousing, and housing navigation.',
      route: '/resources',
      icon: 'm4 11 8-6 8 6v8a1 1 0 0 1-1 1h-4v-5H9v5H5a1 1 0 0 1-1-1z'
    },
    {
      name: 'Mental Health',
      description: 'Crisis care, counseling, and behavioral health services.',
      route: '/resources',
      icon: 'M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z'
    },
    {
      name: 'Addiction',
      description: 'Recovery support, treatment referrals, and peer coaching.',
      route: '/resources',
      icon: 'M12 3v18M3 12h18'
    }
  ];
}
