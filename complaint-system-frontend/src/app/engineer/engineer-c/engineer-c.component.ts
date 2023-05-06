import { Component } from '@angular/core';
import { assignedComplaint } from 'src/app/model/assignedComplaint.model';
import { AssignedComplaintService } from 'src/app/services/assigned-complaint.service';

@Component({
  selector: 'app-engineer-c',
  templateUrl: './engineer-c.component.html',
  styleUrls: ['./engineer-c.component.css']
})
export class EngineerCComponent {
  assignedComplaints:assignedComplaint[];

  constructor(private assignedService:AssignedComplaintService){}
  
  ngOnInit(){
    this.assignedService.getAllComplaintsEngineerC().subscribe(ob=>this.assignedComplaints=ob);
  }
  
  onResolve(assignedComplaint: assignedComplaint){
    alert("Complaint resolved successfully!");
    assignedComplaint.status = true;
  }
}
