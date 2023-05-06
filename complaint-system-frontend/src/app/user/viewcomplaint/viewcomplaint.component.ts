import { Component } from '@angular/core';
import { Complaint } from 'src/app/model/complaint.model';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.css']
})
export class ViewcomplaintComponent {
complaints:Complaint[];

constructor(private service:ComplaintService){}

ngOnInit(){
  this.service.getAllComplaints().subscribe(ob=>this.complaints=ob); 
}
}
