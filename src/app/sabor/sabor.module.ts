import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaborComponent } from './sabor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaborAddComponent } from './sabor-add/sabor-add.component';
import { HttpClientModule } from '@angular/common/http';
import { SaborListComponent } from './sabor-list/sabor-list.component';
import { SaborItemComponent } from './sabor-item/sabor-item.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SaborAddComponent,
    SaborComponent,
    SaborListComponent,
    SaborItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule

  ],
  exports: [
    SaborAddComponent,
    SaborComponent
  ]
})
export class SaborModule { }
