import { Component } from '@angular/core';
import { assignedComplaint } from 'src/app/model/assignedComplaint.model';
import { AssignedComplaintService } from 'src/app/services/assigned-complaint.service';

@Component({
  selector: 'app-engineer-b',
  templateUrl: './engineer-b.component.html',
  styleUrls: ['./engineer-b.component.css']
})
export class EngineerBComponent {
  assignedComplaints:assignedComplaint[];

  constructor(private assignedService:AssignedComplaintService){}
  
  ngOnInit(){
    this.assignedService.getAllComplaintsEngineerB().subscribe(ob=>this.assignedComplaints=ob);
  }
  
  onResolve(assignedComplaint: assignedComplaint){
    alert("Complaint resolved successfully!");
    assignedComplaint.status = true;
  }
}
