import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
   pageTitle: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects;

        // Set heading based on route path
        if (currentUrl.includes('/dashboard')) {
          this.pageTitle = 'Dashboard';
        } else if (currentUrl.includes('/analytics')) {
          this.pageTitle = 'User Management';
        } else if (currentUrl.includes('/projects')) {
          this.pageTitle = 'support';
        } else if (currentUrl.includes('/support')) {
          this.pageTitle = 'Booking Management';
        } else if (currentUrl.includes('/table')) {
          this.pageTitle = 'Table';
        } else {
          this.pageTitle = '';
        }
      });
  }
logout() {
  // Implement your logout logic here
  console.log('User logged out');
  // For example, clear token and navigate:
  // localStorage.clear();
  // this.router.navigate(['/auth']);
}

}
