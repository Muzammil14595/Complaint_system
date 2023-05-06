import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Engineer } from 'src/app/model/engineer.model';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-addengineer',
  templateUrl: './addengineer.component.html',
  styleUrls: ['./addengineer.component.css']
})
export class AddengineerComponent {
  engineer:Engineer = new Engineer();
  constructor(private service:EngineerService,private router:Router){}
  
  onSubmit(){
    this.service.register(this.engineer).subscribe(x=>console.log(x));
    alert("Engineer added successfully!")
    this.router.navigate(['allengineers'])
  }
}
