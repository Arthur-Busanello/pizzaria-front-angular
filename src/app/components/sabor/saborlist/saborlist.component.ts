import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-saborlist',
  templateUrl: './saborlist.component.html',
  styleUrls: ['./saborlist.component.scss']
})
export class SaborlistComponent {
  lista: Sabor[] = [];


  objetoSelecionadoParaEdicao: Sabor = new Sabor();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  saborService = inject(SaborService);

  
  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {

    this.saborService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
        console.log("LISTALL = 200OK");
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.saborService.exemploErro().subscribe({
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
    this.objetoSelecionadoParaEdicao = new Sabor();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, sabor: Sabor, indice: number) {
    // Create a deep copy of the sabor object using Object.assign
    const saborCopy = Object.assign({}, sabor);
  
    // Set the objetoSelecionadoParaEdicao property with the deep copy
    this.objetoSelecionadoParaEdicao = saborCopy;
  
    // Set the indiceSelecionadoParaEdicao property with the indice
    this.indiceSelecionadoParaEdicao = indice;
  
    // Open the specified modal using the modalService.open method
    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarSabor(sabor: Sabor) {

    this.listAll();

    this.modalService.dismissAll();

  }



}

