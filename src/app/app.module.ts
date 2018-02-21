import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {
  MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';


import {LoginComponent} from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AuthGuard} from "./guards/auth.guard";
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DialogloadingComponent} from './components/dialogloading/dialogloading.component';
import {ToastrModule} from "ngx-toastr";
import {UsersComponent} from './pages/admin/users/users.component';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {UserService} from "./services/user.service";
import { DialognewuserComponent } from './components/dialognewuser/dialognewuser.component';

const material_modules = [
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NotfoundComponent,
    DialogloadingComponent,
    UsersComponent,
    DashboardComponent,
    DialognewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    material_modules,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    DialogloadingComponent,
    DialognewuserComponent
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
