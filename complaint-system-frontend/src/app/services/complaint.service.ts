import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from '../model/complaint.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  baseUrl:string = "http://localhost:8080/api/complaint"
  constructor(private http:HttpClient) { }

  addComplaint(complaint:Complaint){
    return this.http.post(this.baseUrl,complaint);
  }

  getAllComplaints(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl);
  }

  getRaisedComplaints(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/raised");
  }

  getAllComplaintsManagerA(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerA");
  }

  getAllComplaintsManagerB(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerB");
  }

  getAllComplaintsManagerC(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerC");
  }

  getAllComplaintsManagerD(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerD");
  }

  getAllComplaintsManagerE(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerE");
  }

  getAllComplaintsManagerF(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerF");
  }

  getAllComplaintsManagerG(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerG");
  }

  getAllComplaintsManagerH(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerH");
  }

  getAllComplaintsManagerI(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerI");
  }

  getAllComplaintsManagerJ(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.baseUrl+"/getAllCompManagerJ");
  }
}
