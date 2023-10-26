import { Component , EventEmitter, Input, Output, inject} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Entrega } from 'src/app/models/entrega';
import { EntregaService } from 'src/app/services/entrega.service';

@Component({
  selector: 'app-entregalist',
  templateUrl: './entregalist.component.html',
  styleUrls: ['./entregalist.component.scss']
})
export class EntregalistComponent {

  lista: Entrega[] = [];


  objetoSelecionadoParaEdicao: Entrega = new Entrega();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  entregaService = inject(EntregaService);

  constructor() {

    this.listAll();
    this.exemploErro();
    this.adicionar;
    this.editar;
    this.addOuEditarEntrega;

  }


  listAll() {

    this.entregaService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.entregaService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }






  // MÉTODOS DA MODAL

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Entrega();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, entrega: Entrega, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, entrega); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarEntrega(entrega: Entrega) {

    this.listAll();

    this.modalService.dismissAll();

  }
}
