import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentService } from './student.service';
import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PaginationModule } from 'src/app/common/modules/pagination/pagination.module';

@NgModule({
  declarations: [StudentComponent, AddStudentComponent, EditStudentComponent],
  providers: [StudentService],
  imports: [
    CommonModule,
    IonicModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StudentModule { }
