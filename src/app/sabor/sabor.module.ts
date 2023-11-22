import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SaborAddComponent } from './sabor-add/sabor-add.component';
import { SaborItemComponent } from './sabor-item/sabor-item.component';
import { SaborListComponent } from './sabor-list/sabor-list.component';
import { SaborComponent } from './sabor.component';



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
