import { Component, OnInit } from '@angular/core';
import { SaborService } from '../sabor.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sabor-add',
  templateUrl: './sabor-add.component.html',
  styleUrls: ['./sabor-add.component.scss']
})
export class SaborAddComponent implements OnInit{

  constructor(
    private sabor:SaborService
  ) { }


  
  // id!: number;
  // nome!: string;
  // preco_adicional!: number;
  // descricao!: string;


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

    this.sabor.addSabor(sabor_dto);


  }



}
