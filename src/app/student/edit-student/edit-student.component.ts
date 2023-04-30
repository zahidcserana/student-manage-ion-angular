import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import {Router} from "@angular/router"
import { ApiResponse } from '../student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  title = 'Edit Student';
  submitted = false;
  error: any;

  studentForm = this.fb.group({
    id: [0, Validators.required],
    name: ['', Validators.required],
    address: '',
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  get f() { return this.studentForm.controls; }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.getStudent(id);
  }

  getStudent(id: any) {
    this.studentService.getStudent(id)
    .subscribe({
      next: (response: ApiResponse) => {
        this.studentForm.patchValue({
          id: response.data.id,
          name: response.data.attributes.name,
          email: response.data.attributes.email,
          mobile: response.data.attributes.mobile,
          address: response.data.attributes.address
        });
      },
      error: error => this.error = error, // error path
    });
  }


  update() {
    this.submitted = true;

    if (this.studentForm.invalid) {
      return;
    }

    console.log('submit')
    console.warn('Your order has been submitted', this.studentForm.value);

    this.studentService.updateStudent(this.studentForm.value)
    .subscribe({
      next: (response: ApiResponse) => {
        // this.studentForm.reset();
        this.router.navigate(['/student'])
      },
      error: error => this.error = error,
    });
  }

}
