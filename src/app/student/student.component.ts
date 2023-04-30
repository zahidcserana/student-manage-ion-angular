import { Component, OnInit } from '@angular/core';
import { ApiResponse, Student, StudentData, StudentModel } from './student';
import { StudentService } from './student.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  title = 'Students';
  students: any[] = [];
  error: any;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents()
    .subscribe({
      next: (response: ApiResponse) => {
        response.data.forEach((row: StudentData) => {
          let student = new StudentModel()
          student.id = row.id
          student.email = row.attributes.email
          student.name = row.attributes.name
          student.number = row.attributes.number
          student.address = row.attributes.address
          student.mobile = row.attributes.mobile
          student.createdAt = row.attributes.createdAt

          this.students.push(student)
        })


        }, // success path
        error: error => this.error = error, // error path
      });
  }

  // registerForm: FormGroup;
  // this.registerForm = this.formBuilder.group({
  //   name: ['', Validators.required],
  //   email: ['', Validators.required],
  //   user_type: ['ADMIN', Validators.required],
  //   password: ['', [Validators.required, Validators.minLength(6)]],
  //   confirmPassword: ['', Validators.required]
  // }, {
  //   validator: MustMatch('password', 'confirmPassword')
  // });


  // getStudents() {
  //   this.studentService.getStudents().pipe(map(response => {
  //     return response;
  //   }), catchError(err => {
  //     console.log(err)
  //     return of([]);
  //   })).subscribe((data: any) => {
  //     // console.log(data)
  //     this.students = data.data;
  //   });
  // }

}
