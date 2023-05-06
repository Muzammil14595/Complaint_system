import { Injectable } from '@angular/core';
import { assignedComplaint } from '../model/assignedComplaint.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignedComplaintService {

  baseUrl:string = "http://localhost:8080/api/assignedComplaint"
  constructor(private http:HttpClient) { }

  addComplaint(assignedComplaint:assignedComplaint){
    return this.http.post(this.baseUrl,assignedComplaint);
  }

  getAllComplaints(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl);
  }

  getAllComplaintsEngineerA(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerA");
  }

  getAllComplaintsEngineerB(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerB");
  }

  getAllComplaintsEngineerC(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerC");
  }

  getAllComplaintsEngineerD(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerD");
  }

  getAllComplaintsEngineerE(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerE");
  }

  getAllComplaintsEngineerF(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerF");
  }

  getAllComplaintsEngineerG(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerG");
  }

  getAllComplaintsEngineerH(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerH");
  }

  getAllComplaintsEngineerI(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerI");
  }

  getAllComplaintsEngineerJ(): Observable<assignedComplaint[]>{
    return this.http.get<assignedComplaint[]>(this.baseUrl+"/getAllCompEngineerJ");
  }
}
