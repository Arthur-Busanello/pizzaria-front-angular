import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Adress } from 'src/app/models/adress';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-adressdetails',
  templateUrl: './adressdetails.component.html',
  styleUrls: ['./adressdetails.component.scss']
})
export class AdressdetailsComponent {
  @Input() adress: Adress = new Adress();
  @Output() retorno = new EventEmitter<Adress>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  adressService = inject(AdressService);

  constructor() {

  }
  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.adressService.save(this.adress).subscribe({
      next: this.adress => { // QUANDO DÁ CERTO
        this.retorno.emit(this.adress);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }


  excluir(adress: Adress, indice: number) {

    this.adress.client.splice(indice,1);
    
  }

  retornoAdressList(adress: Adress) {

    if (this.pedido.produtos == null)
      this.pedido.produtos = [];

    this.adress.client.push(client);
    this.modalRef.dismiss();
}


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}
