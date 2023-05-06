import { Component } from '@angular/core';
import { assignedComplaint } from 'src/app/model/assignedComplaint.model';
import { AssignedComplaintService } from 'src/app/services/assigned-complaint.service';

@Component({
  selector: 'app-engineer-g',
  templateUrl: './engineer-g.component.html',
  styleUrls: ['./engineer-g.component.css']
})
export class EngineerGComponent {
assignedComplaints:assignedComplaint[];

constructor(private assignedService:AssignedComplaintService){}

ngOnInit(){
  this.assignedService.getAllComplaintsEngineerG().subscribe(ob=>this.assignedComplaints=ob);
}

onResolve(assignedComplaint: assignedComplaint){
  alert("Complaint resolved successfully!");
  assignedComplaint.status = true;
}
}
