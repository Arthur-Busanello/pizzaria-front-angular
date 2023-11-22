import { Component, OnInit } from '@angular/core';
import eventService from '../services/event.service';
import { SizeService } from './size.service';
import { size } from '../models/size';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  constructor( private sizeService : SizeService){

eventService.listen("addSize", (size) => {

  console.log("listening addSize", size);


  this.sizes.push( size);

});

eventService.listen("deleteSize", (size) => {

  console.log("listening deleteSize", size);


  const index = this.sizes.findIndex((sizeItem) => sizeItem.tamanho === size.tamanho);
  this.sizes.splice(index, 1);


});


  };


  sizes : any[]  = [];

  ngOnInit(): void {
    this.sizeService.findAll().subscribe((size: size[]) => {

      this.sizes = size;

      console.log(this.sizes);

    });


  }








}
