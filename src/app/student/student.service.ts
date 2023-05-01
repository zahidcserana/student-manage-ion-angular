import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, map, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiResponse, Student, StudentData } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl ='http://task.local/api/';

  studentsUrl = 'students?';
  studentPostUrl = 'students';
  studentGetUrl = 'students/';
  studentUpdateUrl = 'students/';
  // private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    // this.handleError = httpErrorHandler.createHandleError('StudentsService');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getStudents(page: any, size: any):Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + this.studentsUrl + `page[number]=${page}&page[size]=${size}`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getStudent(id: any):Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + this.studentGetUrl + id)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  addStudent(student: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + this.studentPostUrl, student)
      .pipe(
        // catchError(this.handleError('addStudent', student))
      );
  }

  updateStudent(student: any): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(this.baseUrl + this.studentUpdateUrl + student.id, student)
      .pipe(
        // catchError(this.handleError('addStudent', student))
      );
  }

  // getStudents(){
  //   return this.http.get(this.baseUrl + this.studentsUrl).pipe(map(res => res ));
  // }

}
