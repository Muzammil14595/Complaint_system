import { Component } from '@angular/core';
import { Complaint } from 'src/app/model/complaint.model';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent {
  complaints:Complaint[];

  constructor(private service:ComplaintService){}
  
  ngOnInit(){
    this.service.getAllComplaints().subscribe(ob=>this.complaints=ob); 
  }
}
