import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/dashboard',
    loadChildren: () =>
      import('./pages/admin/dashboard/dashboard.module').then(
        (m) => m.DashboardModule),
        canActivate:[AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
