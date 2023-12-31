import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
   selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})


export class ClientlistComponent {

  lista: Client[] = [];

  client_id!:number;
  objetoSelecionadoParaEdicao: Client = new Client();
  indiceSelecionadoParaEdicao!: number;
  @Input() modoLancamento: boolean = false;
  @Output() retorno = new EventEmitter<Client>();



  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  clientService = inject(ClientService);

  
  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {
    const listObservable = this.clientService.listAll();
  
    if (listObservable) {
      listObservable.subscribe({
        next: (lista) => {
          this.lista = lista;
          console.log("LISTALL = OK");
        },
        error: (erro) => {
          console.error("Error fetching clients:", erro);
          alert("Exemplo de tratamento de erro/exception! Observe o erro no console!");
        },
      });
    } else {
      console.error("listAll method returned undefined or is not an observable.");
    }
  }

  exemploErro() {
    this.clientService.exemploErro().subscribe({
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
    this.objetoSelecionadoParaEdicao = new Client();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, client: Client, indice: number) {
    this.client_id = client.id;
    console.log(this.client_id);
    this.objetoSelecionadoParaEdicao = Object.assign({}, client); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarClient(client: Client) {

    this.listAll();

    this.modalService.dismissAll();

  }
  lancamento(client: Client){
    this.retorno.emit(client);
  }

}
