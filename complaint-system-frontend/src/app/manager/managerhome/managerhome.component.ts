import { Component } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
import { Complaint } from 'src/app/model/complaint.model';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.css']
})
export class ManagerhomeComponent {
  complaints:Complaint[];
  
  modalComplaint = {
    
    userName:"",
    userPincode:"",
    problemDescription:""
  }
  constructor(private service:ComplaintService){}
  
  ngOnInit(){
    this.service.getAllComplaints().subscribe(ob=>this.complaints=ob);
    
  }
  
}
