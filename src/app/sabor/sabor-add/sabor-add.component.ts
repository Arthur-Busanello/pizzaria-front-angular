import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { SaborService } from '../sabor.service';
import { FormControl, FormGroup } from '@angular/forms';
import { sabor } from 'src/app/models/sabor';
import eventService from 'src/app/services/event.service';


@Component({
  selector: 'sabor-add',
  templateUrl: './sabor-add.component.html',
  styleUrls: ['./sabor-add.component.scss']
})
export class SaborAddComponent {

  @Output () addSabor = new EventEmitter<sabor>();

  saborService = inject(SaborService);


  saborForm = new FormGroup({
    saborNome: new FormControl (),
    saborPreco_adicional: new FormControl(),
    saborDescricao: new FormControl()
  });

  ngOnInit(): void {


  }


  submitForm() {
    const sabor_dto = {
      nome:this.saborForm.value.saborNome,
      preco_adicional:this.saborForm.value.saborPreco_adicional,
      descricao:this.saborForm.value.saborDescricao
    }





     this.saborService.addSabor(sabor_dto).subscribe(sabor =>
      {
        eventService.emit("addSabor", sabor);
        console.log("request enviada" + sabor);

      })

    this.saborForm.reset();




  }



}
