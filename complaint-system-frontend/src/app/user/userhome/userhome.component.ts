import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/model/complaint.model';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  complaint:Complaint= new Complaint();

  constructor(private service:ComplaintService,private router:Router){}

  onSubmit(){
    this.service.addComplaint(this.complaint).subscribe(x=>console.log(x));
    alert("Complaint added successfully!");
    this.router.navigate(["viewcomplaint"])
  
  }
}
