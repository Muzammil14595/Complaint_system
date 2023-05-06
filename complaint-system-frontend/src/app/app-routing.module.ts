import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { EngineerloginComponent } from './engineer/engineerlogin/engineerlogin.component';
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

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
  {path:"register",component:RegisterComponent},
  {path:"userhome",component:UserhomeComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"adminhome",component:AdminhomeComponent},
  {path:"viewcomplaint",component:ViewcomplaintComponent},
  {path:"managerlogin",component:ManagerloginComponent},
  {path:"managerhome",component:ManagerhomeComponent},
  {path:"managerA",component:ManagerAComponent},
  {path:"managerB",component:ManagerBComponent},
  {path:"managerC",component:ManagerCComponent},
  {path:"managerD",component:ManagerDComponent},
  {path:"managerE",component:ManagerEComponent},
  {path:"managerF",component:ManagerFComponent},
  {path:"managerG",component:ManagerGComponent},
  {path:"managerH",component:ManagerHComponent},
  {path:"managerI",component:ManagerIComponent},
  {path:"managerJ",component:ManagerJComponent},
  {path:"engineerlogin",component:EngineerloginComponent},
  {path:"engineerA",component:EngineerAComponent},
  {path:"engineerB",component:EngineerBComponent},
  {path:"engineerC",component:EngineerCComponent},
  {path:"engineerD",component:EngineerDComponent},
  {path:"engineerE",component:EngineerEComponent},
  {path:"engineerF",component:EngineerFComponent},
  {path:"engineerG",component:EngineerGComponent},
  {path:"engineerH",component:EngineerHComponent},
  {path:"engineerI",component:EngineerIComponent},
  {path:"engineerJ",component:EngineerJComponent},
  {path:"allTickets",component:AllTicketsComponent},
  {path:"allusers",component:AllusersComponent},
  {path:"allmanagers",component:AllmanagersComponent},
  {path:"allengineers",component:AllengineersComponent},
  {path:"addmanager",component:AddmanagerComponent},
  {path:"updatemanager/:id",component:UpdatemanagerComponent},
  {path:"addengineer",component:AddengineerComponent},
  {path:"updateEngineer/:id",component:UpdateEngineerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
