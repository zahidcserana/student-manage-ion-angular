import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[PaginationComponent],
  declarations: [PaginationComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PaginationModule { }
