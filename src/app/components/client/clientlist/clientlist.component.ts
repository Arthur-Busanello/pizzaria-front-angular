import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { Entrega } from 'src/app/models/entrega';
import { ClientService } from 'src/app/services/cleint.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent {
  lista: Client[] = [];


  objetoSelecionadoParaEdicao: Client = new Client();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  clientService = inject(ClientService);
  modal : any;

  constructor() {

    this.listAll();

  }


  listAll() {

    this.clientService.listAllclient().subscribe;
     
  }


  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Client();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, client: Client, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, client); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarClient(client:Client){
    this.listAll();

    this.modalService.dismissAll();
  }
}
