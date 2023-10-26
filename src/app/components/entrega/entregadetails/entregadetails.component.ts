import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Entrega } from 'src/app/models/entrega';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EntregaService } from 'src/app/services/entrega.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-entregadetails',
  templateUrl: './entregadetails.component.html',
  styleUrls: ['./entregadetails.component.scss']
})
export class EntregadetailsComponent {
  @Input() entrega: Entrega = new Entrega();
  @Output() retorno = new EventEmitter<Entrega>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  entregaService = inject(EntregaService);


  constructor() {
    this.salvar;
    this.excluir;
    this.lancar;
  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.entregaService.save(this.entrega).subscribe({
      next: pedido => { // QUANDO DÁ CERTO
        this.retorno.emit(pedido);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }


  excluir(pedido: Pedido, indice: number) {

    this.entrega.pedido.splice(indice, 1);

  }

  retornoPedidoList(pedido: Pedido) {

    if (this.entrega.pedido == null)
      this.entrega.pedido = [];

    this.entrega.pedido.push(pedido);
    this.modalRef.dismiss();
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}
