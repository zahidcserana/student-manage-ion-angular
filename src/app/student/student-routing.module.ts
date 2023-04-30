import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student/add-student.component'
import { EditStudentComponent } from './edit-student/edit-student.component'

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'add',
    component: AddStudentComponent
  },
  {
    path: ':id',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
