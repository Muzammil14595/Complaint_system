import { Component } from '@angular/core';
import { assignedComplaint } from 'src/app/model/assignedComplaint.model';
import { AssignedComplaintService } from 'src/app/services/assigned-complaint.service';

@Component({
  selector: 'app-engineer-h',
  templateUrl: './engineer-h.component.html',
  styleUrls: ['./engineer-h.component.css']
})
export class EngineerHComponent {
  assignedComplaints:assignedComplaint[];

  constructor(private assignedService:AssignedComplaintService){}
  
  ngOnInit(){
    this.assignedService.getAllComplaintsEngineerH().subscribe(ob=>this.assignedComplaints=ob);
  }
  
  onResolve(assignedComplaint: assignedComplaint){
    alert("Complaint resolved successfully!");
    assignedComplaint.status = true;
  }
}
