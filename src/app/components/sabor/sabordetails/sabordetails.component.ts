import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sabordetails',
  templateUrl: './sabordetails.component.html',
  styleUrls: ['./sabordetails.component.scss']
})
export class SabordetailsComponent {

  @Input() sabor: Sabor = new Sabor();
  @Output() retorno = new EventEmitter<Sabor>();
  
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  saborService = inject(SaborService);
  item: any;


  constructor() {

  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.saborService.save(this.sabor).subscribe({
      next: sabor => { // QUANDO DÁ CERTO
        this.retorno.emit(sabor);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }


  excluir(sabor: Sabor, i: number) {
    // Remove the flavor object from the `sabor` array
    this.item.sabor.splice(i, 1);

    // Save the updated flavor list
    this.salvar();
  }

  retornoSaborList(sabor: Sabor) {

    if (this.item.sabor == null)
      this.item.sabor = [];

    this.item.sabor.push(sabor);
    this.modalRef.dismiss();
 }

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }





}