import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/model/engineer.model';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-update-engineer',
  templateUrl: './update-engineer.component.html',
  styleUrls: ['./update-engineer.component.css']
})
export class UpdateEngineerComponent {
  engineer:Engineer = new Engineer();
  constructor(private service:EngineerService, private actRoute:ActivatedRoute, private router:Router){}
 
  onSubmit(){
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.service.updateEngineer(Number(id),this.engineer).subscribe(x=>console.log(x)); 
    this.router.navigate(['allengineers']);
  }
}
