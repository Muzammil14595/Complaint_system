import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/model/manager.model';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent {
manager:Manager = new Manager();
constructor(private service:ManagerService,private router:Router){}

onSubmit(){
  this.service.register(this.manager).subscribe(x=>console.log(x));
  alert("Manager added successfully!")
  this.router.navigate(['allmanagers'])
}
}
