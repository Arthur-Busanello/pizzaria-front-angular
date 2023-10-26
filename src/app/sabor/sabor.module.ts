import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaborComponent } from './sabor.component';
import { FormControl } from '@angular/forms';



@NgModule({
  declarations: [
    SaborComponent
  ],
  imports: [
    CommonModule,
    FormControl
    
  ]
})
export class SaborModule { }
