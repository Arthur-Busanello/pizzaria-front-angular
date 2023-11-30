import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Adress } from 'src/app/models/adress';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss']
})
export class ClientdetailsComponent {
  @Input() client_id!: number;
  @Input() client: Client = new Client();
  @Output() retorno = new EventEmitter<Client>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  clientService = inject(ClientService);


  constructor() {

  }
  salvar() {
    this.clientService.save(this.client).subscribe({
      next: (client: Client) => {
        this.retorno.emit(client);
      },
      error: (erro: any) => {
        console.error(erro);
      }
    });
  }

  update(client:Client){
    console.log(this.client_id)
    this.clientService.edit(this.client , this.client_id).subscribe({
      next: () => {
        console.log("client edit is executed");
        this.retorno.emit(client);
      },
      error: () => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(Error);
      }
    });
  }

  excluir(address: Adress, i: number) {
    this.client.adress.splice(i, 1);
    this.salvar();
  }

 retornoAdressList(adress: Adress) {

    if (this.client.adress == null)
      this.client.adress = [];

    this.client.adress.push(adress);
    this.modalRef.dismiss();
 }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}
