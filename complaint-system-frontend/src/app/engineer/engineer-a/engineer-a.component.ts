import { Component } from '@angular/core';
import { assignedComplaint } from 'src/app/model/assignedComplaint.model';
import { AssignedComplaintService } from 'src/app/services/assigned-complaint.service';

@Component({
  selector: 'app-engineer-a',
  templateUrl: './engineer-a.component.html',
  styleUrls: ['./engineer-a.component.css']
})
export class EngineerAComponent {
  assignedComplaints:assignedComplaint[];

  constructor(private assignedService:AssignedComplaintService){}
  
  ngOnInit(){
    this.assignedService.getAllComplaintsEngineerA().subscribe(ob=>this.assignedComplaints=ob);
  }
  
  onResolve(assignedComplaint: assignedComplaint){
    alert("Complaint resolved successfully!");
    assignedComplaint.status = true;
  }
}
