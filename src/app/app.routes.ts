import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ProjectsComponent } from './components/support/projects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

export const routes: Routes = [

  { path: 'auth', component: AuthComponent },

  // Layout route
  {
    path: '',
    component: SidebarComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
        { path: 'analytics', component: AnalyticsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'support', component: SettingsComponent },
      {path:'table',component:GenericTableComponent},
    ]
  },
 { path: '**', redirectTo: 'auth' }
];
