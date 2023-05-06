import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from 'src/app/model/manager.model';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-updatemanager',
  templateUrl: './updatemanager.component.html',
  styleUrls: ['./updatemanager.component.css']
})
export class UpdatemanagerComponent {
  manager:Manager = new Manager();
  constructor(private service:ManagerService, private actRoute:ActivatedRoute, private router:Router){}
 
  onSubmit(){
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.service.updateManager(Number(id),this.manager).subscribe(x=>console.log(x)); 
    this.router.navigate(['allmanagers']);
  }
}
