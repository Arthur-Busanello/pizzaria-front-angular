import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produto';
import { Sabor } from 'src/app/models/sabor';
import { ProdutosService } from 'src/app/services/produtos.service';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-produtosdetails',
  templateUrl: './produtosdetails.component.html',
  styleUrls: ['./produtosdetails.component.scss']
})
export class ProdutosdetailsComponent implements OnInit {

  @Input() produto: Produto = new Produto();
  @Output() retorno = new EventEmitter<Produto>();
  modalRef!: NgbModalRef;
  saboresList: Sabor[] = [];

  constructor(
    private modalService: NgbModal,
    private produtosService: ProdutosService,
    private saborService: SaborService
  ) {}

  ngOnInit() {
    this.carregarSabores();
  }

  carregarSabores() {
    this.saborService.getSabores().subscribe({
      next: (sabores: Sabor[]) => {
        this.saboresList = sabores;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  salvar() {
    this.produtosService.save(this.produto).subscribe({
      next: produto => {
        this.retorno.emit(produto);
       
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  onSaboresChange($event: any) {
    // Update the produto.sabor property based on the selected value
    this.produto.sabor = $event;
  }

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
}