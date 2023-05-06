import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/model/manager.model';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-allmanagers',
  templateUrl: './allmanagers.component.html',
  styleUrls: ['./allmanagers.component.css']
})
export class AllmanagersComponent {
  managers:Manager[];
  constructor(private service:ManagerService, private router:Router){}
  
  ngOnInit(){
    this.service.getAllManagers().subscribe(ob=>this.managers=ob);
  }

  deleteManager(manager:Manager){
    this.service.deleteManager(manager.id).subscribe(resp=>{
      this.router.navigate(['adminhome']);
    }, error=>console.log(error));
    alert(manager.name+" is deleted");
  }
}
