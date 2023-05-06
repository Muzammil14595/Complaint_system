import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Engineer } from '../model/engineer.model';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  baseUrl:string = "http://localhost:8080/api/engineer"
  constructor(private http:HttpClient) { }

  getAllEngineers(): Observable<Engineer[]> {
    return this.http.get<Engineer[]>(this.baseUrl+"/allEngineers");
  }

  register(engineer: Engineer) {
    return this.http.post(this.baseUrl+"/register", engineer).pipe(
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

  login(engineer: Engineer) {
    return this.http.post(this.baseUrl + "/login", engineer).pipe(
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

  deleteEngineer(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  updateEngineer(id:number,engineer: Engineer){
    return this.http.put(this.baseUrl+"/"+id,engineer);
  }
}
