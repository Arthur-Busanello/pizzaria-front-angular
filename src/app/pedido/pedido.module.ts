import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PedidoComponent } from './pedido.component';
import { NovoPedidoomponent } from './novo-pedido/novo-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidoComponent,
    NovoPedidoomponent,

 

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class PedidoModule { }
