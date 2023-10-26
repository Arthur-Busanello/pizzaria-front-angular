import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss']
})
export class ClientdetailsComponent {

  @Input() adress: Client = new Client();
  @Output() retorno = new EventEmitter<Client>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  clientService = inject(ClientService);


  constructor() {

  }
  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ
  
    this.clientService.save(this.client).subscribe({
      next: (client: Client) => { // QUANDO DÁ CERTO
        this.retorno.emit(client);
      },
      error: (erro: any) => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
  
  
  // salvar() {
  //   //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

  //   this.clientService.save(this.client).subscribe({
  //     next: this.client => { // QUANDO DÁ CERTO
  //        this.retorno.emit(this.client);
  //     },
  //     error: erro => { // QUANDO DÁ ERRO
  //       alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
  //       console.error(erro);       }
  //    });



// //   }


// //   excluir(adress: Adress, indice: number) {

// //     this.adress.client.splice(indice,1);
    
// //   }

// //   retornoAdressList(adress: Adress) {

// //     if (this.pedido.produtos == null)
// //       this.pedido.produtos = [];

// //     this.adress.client.push(client);
// //     this.modalRef.dismiss();
// // }


// //   lancar(modal: any) {
// //     this.modalRef = this.modalService.open(modal, { size: 'lg' });
// //   }

}
