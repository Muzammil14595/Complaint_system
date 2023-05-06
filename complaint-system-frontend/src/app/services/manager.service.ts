import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Manager } from '../model/manager.model';
import { Complaint } from 'src/app/model/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  baseUrl:string = "http://localhost:8080/api/manager"
  constructor(private http:HttpClient) { }

  getAllManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.baseUrl+"/allManagers");
  }

  register(manager: Manager) {
    return this.http.post(this.baseUrl+"/register", manager).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(errorMsg);
      })
    );
  }
  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  login(manager: Manager) {
    return this.http.post(this.baseUrl + "/login", manager).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(errorMsg);
      })
    );;
  }

  deleteManager(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  updateManager(id:number,manager: Manager){
    return this.http.put(this.baseUrl+"/"+id,manager);
  }
}
