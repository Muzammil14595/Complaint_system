import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './user/homepage/homepage.component';
import { RegisterComponent } from './user/register/register.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewcomplaintComponent } from './user/viewcomplaint/viewcomplaint.component';
import { ManagerloginComponent } from './manager/managerlogin/managerlogin.component';
import { ManagerhomeComponent } from './manager/managerhome/managerhome.component';
import { ManagerAComponent } from './manager/manager-a/manager-a.component';
import { ManagerBComponent } from './manager/manager-b/manager-b.component';
import { ManagerCComponent } from './manager/manager-c/manager-c.component';
import { ManagerDComponent } from './manager/manager-d/manager-d.component';
import { ManagerEComponent } from './manager/manager-e/manager-e.component';
import { ManagerFComponent } from './manager/manager-f/manager-f.component';
import { ManagerGComponent } from './manager/manager-g/manager-g.component';
import { ManagerHComponent } from './manager/manager-h/manager-h.component';
import { ManagerIComponent } from './manager/manager-i/manager-i.component';
import { ManagerJComponent } from './manager/manager-j/manager-j.component';
import { EngineerloginComponent } from './engineer/engineerlogin/engineerlogin.component';
import { EngineerAComponent } from './engineer/engineer-a/engineer-a.component';
import { EngineerBComponent } from './engineer/engineer-b/engineer-b.component';
import { EngineerCComponent } from './engineer/engineer-c/engineer-c.component';
import { EngineerDComponent } from './engineer/engineer-d/engineer-d.component';
import { EngineerEComponent } from './engineer/engineer-e/engineer-e.component';
import { EngineerFComponent } from './engineer/engineer-f/engineer-f.component';
import { EngineerGComponent } from './engineer/engineer-g/engineer-g.component';
import { EngineerHComponent } from './engineer/engineer-h/engineer-h.component';
import { EngineerIComponent } from './engineer/engineer-i/engineer-i.component';
import { EngineerJComponent } from './engineer/engineer-j/engineer-j.component';
import { AllTicketsComponent } from './manager/all-tickets/all-tickets.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { AllmanagersComponent } from './admin/allmanagers/allmanagers.component';
import { AllengineersComponent } from './admin/allengineers/allengineers.component';
import { AddmanagerComponent } from './admin/addmanager/addmanager.component';
import { UpdatemanagerComponent } from './admin/updatemanager/updatemanager.component';
import { AddengineerComponent } from './admin/addengineer/addengineer.component';
import { UpdateEngineerComponent } from './admin/update-engineer/update-engineer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    UserhomeComponent,
    ViewcomplaintComponent,
    ManagerloginComponent,
    ManagerhomeComponent,
    ManagerAComponent,
    ManagerBComponent,
    ManagerCComponent,
    ManagerDComponent,
    ManagerEComponent,
    ManagerFComponent,
    ManagerGComponent,
    ManagerHComponent,
    ManagerIComponent,
    ManagerJComponent,
    EngineerloginComponent,
    EngineerAComponent,
    EngineerBComponent,
    EngineerCComponent,
    EngineerDComponent,
    EngineerEComponent,
    EngineerFComponent,
    EngineerGComponent,
    EngineerHComponent,
    EngineerIComponent,
    EngineerJComponent,
    AllTicketsComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AllusersComponent,
    AllmanagersComponent,
    AllengineersComponent,
    AddmanagerComponent,
    UpdatemanagerComponent,
    AddengineerComponent,
    UpdateEngineerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
