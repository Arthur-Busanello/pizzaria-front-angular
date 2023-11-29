import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produto';
import { Sabor } from 'src/app/models/sabor';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtosdetails',
  templateUrl: './produtosdetails.component.html',
  styleUrls: ['./produtosdetails.component.scss']
})
export class ProdutosdetailsComponent {

  @Input() produto: Produto = new Produto();
  @Output() retorno = new EventEmitter<Produto>();
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  produtosService = inject(ProdutosService);
  sabor: string = '';
  saboresList: Sabor[] = [];
 

  constructor() {
    this.produtosService.getSabor().subscribe({
      next: (sabores: Sabor[]) => {
        this.saboresList = sabores;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.produtosService.save(this.produto).subscribe({
      next: produto => { // QUANDO DÁ CERTO
        this.retorno.emit(produto);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
  onSaboresChange(produto: Produto, $event: any) {
    // Update the produto.sabor property based on the selected value
    this.produto.sabor = $event.target.value;
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}
