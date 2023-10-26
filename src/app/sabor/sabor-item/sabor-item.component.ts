import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { sabor } from 'src/app/models/sabor';
import { SaborService } from '../sabor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

@Component({
  selector: 'app-sabor-item',
  templateUrl: './sabor-item.component.html',
  styleUrls: ['./sabor-item.component.scss']
})
export class SaborItemComponent implements OnInit {

  @Input()
  saborItem!: sabor;

  id! : number;


  modalService = inject(NgbModal);


  constructor(private saborService : SaborService){}
  ngOnInit(): void {




  }


  saborForm = new FormGroup({
    saborNome: new FormControl (),
    saborPreco_adicional: new FormControl(),
    saborDescricao: new FormControl()
  });




  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
    }


  submitForm() {

    const sabor_dto = {
      nome:this.saborForm.value.saborNome,
      preco_adicional:this.saborForm.value.saborPreco_adicional,
      descricao:this.saborForm.value.saborDescricao
    }

    let id = this.saborItem.id;


    this.saborService.updateSabor(sabor_dto, id ).subscribe(data =>{
      console.log(data);

    });
    console.log("request enviada" + JSON.stringify(sabor_dto));





    //  this.saborService.addSabor(sabor_dto).subscribe(sabor =>
    //   {
    //     eventService.emit("addSabor", sabor);
    //     console.log("request enviada" + sabor);

    //   })

    this.saborForm.reset();




  }




}
