import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaborComponent } from './sabor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaborAddComponent } from './sabor-add/sabor-add.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SaborAddComponent,
    SaborComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports: [
    SaborAddComponent,
    SaborComponent
  ]
})
export class SaborModule { }
