import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import {Router} from "@angular/router"
import { ApiResponse } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  title = 'Add Student';
  submitted = false;
  error: any;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {}

  get f() { return this.studentForm.controls; }

  studentForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: '',
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  add() {
    console.log(this.studentForm.value.name)

    this.submitted = true;

    if (this.studentForm.invalid) {
      return;
    }

    this.studentService.addStudent(this.studentForm.value)
    .subscribe({
      next: (response: ApiResponse) => {
        // this.studentForm.reset();
        this.router.navigate(['/student'])
      },
      error: error => this.error = error,
    });
  }
}
