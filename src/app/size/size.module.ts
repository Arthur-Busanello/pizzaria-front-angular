import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeAddComponent } from './size-add/size-add.component';
import { SizeItemComponent } from './size-item/size-item.component';
import { SizeListComponent } from './size-list/size-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SizeAddComponent,
    SizeItemComponent,
    SizeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule
  ],
  exports: [
    SizeAddComponent,
    SizeItemComponent,
    SizeListComponent

  ]
})
export class SizeModule { }
