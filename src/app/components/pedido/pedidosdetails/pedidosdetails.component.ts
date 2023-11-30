import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidosdetails',
  templateUrl: './pedidosdetails.component.html',
  styleUrls: ['./pedidosdetails.component.scss']
})
export class PedidosdetailsComponent {
  @Input() pedido_id!: number;
  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidoService = inject(PedidosService);


  constructor() {

  }
  salvar() {
    this.pedidoService.save(this.pedido).subscribe({
      next: (pedido: Pedido) => {
        this.retorno.emit(pedido);
        console.log("SAVE PEDIDO 200OK");
      },
      error: (erro: any) => {
        console.error(erro);
      }
    });
  }

  // update(pedido: Pedido){
  //   console.log(this.pedido_id)
  //   this.pedidoService.edit(this.pedido , this.pedido_id).subscribe({
  //     next: () => {
  //       console.log("client edit is executed");
  //       this.retorno.emit(pedido);
  //     },
  //     error: () => {
  //       alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
  //       console.error(Error);
  //     }
  //   });
  // }

  excluir(pedido: Pedido, i: number) {
    this.pedido.client.splice(i, 1);
    this.salvar();
  }

 retornoClientList(client: Client) {

    if (this.pedido.client == null)
      this.pedido.client = [];

    this.pedido.client.push(client);
    this.modalRef.dismiss();
 }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
}
