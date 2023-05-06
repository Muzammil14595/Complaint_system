import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/model/manager.model';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent {
  manager:Manager= new Manager();

  constructor(private service:ManagerService,private router:Router){}

  onSubmit(){
    if(this.manager.email == "manager1@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerA']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager2@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerB']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager3@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerC']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager4@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerD']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager5@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerE']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager6@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerF']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager7@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerG']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager8@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerH']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager9@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerI']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
  else if(this.manager.email == "manager10@gmail.com"){
    this.service.login(this.manager).subscribe(
      resp=>{
      this.router.navigate(['managerJ']);
    }, 
      error=>(console.log(error), alert("Manager Not Found")));
  }
}
}
