import { Component, inject } from '@angular/core';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Adress } from 'src/app/models/adress';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-adresslist',
  templateUrl: './adresslist.component.html',
  styleUrls: ['./adresslist.component.scss']
})
export class AdresslistComponent {

  lista: Adress[] = [];


  objetoSelecionadoParaEdicao: Adress = new Adress();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  adressService = inject(AdressService);

  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {

    this.adressService.listAll().subscribe({
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

    this.adressService.exemploErro().subscribe({
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
    this.objetoSelecionadoParaEdicao = new Adress();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, adress: Adress, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, adress); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarAdress(adress: Adress) {

    this.listAll();

    this.modalService.dismissAll();

  }






}