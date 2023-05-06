import { Component } from '@angular/core';
import { assignedComplaint } from 'src/app/model/assignedComplaint.model';
import { AssignedComplaintService } from 'src/app/services/assigned-complaint.service';

@Component({
  selector: 'app-engineer-i',
  templateUrl: './engineer-i.component.html',
  styleUrls: ['./engineer-i.component.css']
})
export class EngineerIComponent {
  assignedComplaints:assignedComplaint[];

  constructor(private assignedService:AssignedComplaintService){}
  
  ngOnInit(){
    this.assignedService.getAllComplaintsEngineerI().subscribe(ob=>this.assignedComplaints=ob);
  }
  
  onResolve(assignedComplaint: assignedComplaint){
    alert("Complaint resolved successfully!");
    assignedComplaint.status = true;
  }
}
