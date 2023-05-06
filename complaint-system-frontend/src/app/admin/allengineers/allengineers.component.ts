import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Engineer } from 'src/app/model/engineer.model';
import { Manager } from 'src/app/model/manager.model';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-allengineers',
  templateUrl: './allengineers.component.html',
  styleUrls: ['./allengineers.component.css']
})
export class AllengineersComponent {
  engineers:Engineer[];
  constructor(private service:EngineerService, private router:Router){}
  
  ngOnInit(){
    this.service.getAllEngineers().subscribe(ob=>this.engineers=ob);
  }

  deleteEngineer(engineer:Engineer){
    this.service.deleteEngineer(engineer.id).subscribe(resp=>{
      this.router.navigate(['adminhome']);
    }, error=>console.log(error));
    alert(engineer.name+" is deleted");
  }
}
