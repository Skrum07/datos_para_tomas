import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Familia } from './familia';

@Injectable({
  providedIn: 'root'
})
export class FamiliasService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add Familia
  AddFamilia(data: Familia): Observable<any> {
    let API_URL = `${this.endpoint}/families/add-family`;

    return this.http.post(API_URL, data)
      .pipe(catchError(
        this.errorMgmt)
        )
  }

  // Get all familias y fecha del dia
  GetFamilias(nro: string) {
    if (nro == "0") {
      return this.http.get(`${this.endpoint}/families/hoy`);
    } else {
      return this.http.get(`${this.endpoint}/families`);
    }
  }

  // Delete Familia
  DeleteFamilia(id: any): Observable<any> {
    const API_URL = `${this.endpoint}/delete-student/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));

  }

}
