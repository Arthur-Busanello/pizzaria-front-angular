import { Component, OnInit } from '@angular/core';
import { sabor } from '../models/sabor';
import { SaborService } from './sabor.service';
import eventService from '../services/event.service';

@Component({
  selector: 'app-sabor',
  templateUrl: './sabor.component.html',
  styleUrls: ['./sabor.component.scss']
})
export class SaborComponent implements OnInit {

  constructor( private saborService : SaborService){

eventService.listen("addSabor", (sabor) => {

  console.log("listening addSabor", sabor);


  this.sabores.push( sabor);

});

eventService.listen("deleteSabor", (sabor) => {

  console.log("listening deleteSabor", sabor);


  const index = this.sabores.findIndex((saborItem) => saborItem.nome === sabor.nome);
  this.sabores.splice(index, 1);


});


  };


  sabores : any[]  = [];

  ngOnInit(): void {
    this.saborService.getAllSabor().subscribe((sabor: sabor[]) => {

      this.sabores = sabor;

      console.log(this.sabores);

    });


  }








}
