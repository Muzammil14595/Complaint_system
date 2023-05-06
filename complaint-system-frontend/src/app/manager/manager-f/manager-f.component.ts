import { Component } from '@angular/core';
import { Complaint } from 'src/app/model/complaint.model';
import { AssignedComplaintService } from 'src/app/services/assigned-complaint.service';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-manager-f',
  templateUrl: './manager-f.component.html',
  styleUrls: ['./manager-f.component.css']
})
export class ManagerFComponent {
  complaints:Complaint[];
  assignedComplaint = {
    id:0,
    userName:"",
    userAddress:"",
    userCity:"",
    userPincode: 0,
    userNumber:0,
    problemDescription:"",
    status:false
  }
  constructor(private service:ComplaintService, private assignedService:AssignedComplaintService){}
  
  ngOnInit(){
    this.service.getAllComplaintsManagerF().subscribe(ob=>this.complaints=ob);
  }

  onAssign(complaint: Complaint){
    this.assignedComplaint = complaint;
    this.assignedService.addComplaint(this.assignedComplaint).subscribe(x=>console.log(x));
    alert("Complaint assigned successfully!");
    complaint.status =true;
  }
}
