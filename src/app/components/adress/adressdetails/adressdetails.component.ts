import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Adress } from 'src/app/models/adress';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-adressdetails',
  templateUrl: './adressdetails.component.html',
  styleUrls: ['./adressdetails.component.scss'],
})
export class AdressdetailsComponent {
  @Input() adress!: Adress;
  @Output() retorno = new EventEmitter<Adress>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  addressService = inject(AdressService);

  constructor() {}

  salvar() {
    // This serves to edit or add, it doesn't matter

    this.addressService.save(this.adress).subscribe({
      next: (adress) => {
        // When it goes right
        this.retorno.emit(adress);
      },
      error: (error: any) => {
        // When it goes wrong
        alert('Example of error/exception handling! Check the console for the error!');
        console.error(error);
      },
    });
  }

  excluir(adress: Adress, index: number) {
    adress.client.splice(index, 1);
  }
  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }


  // retornoAdressList(adress: Adress) {
  //   if (adress.client === null) {
  //     adress.client = [];
  //   }

  //   adress.client.push(adress);
  //   this.modalRef.dismiss();
  // }

  // lançar(modal: any) {
  //   this.modalRef = this.modalService.open(modal, { size: 'lg' });
  // }
}
