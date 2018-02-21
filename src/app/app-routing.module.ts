import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {UsersComponent} from "./pages/admin/users/users.component";

const routes: Routes = [
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
  ]
  },
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'},
  {path: 'not-found', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
