import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { item } from 'src/app/models/items';
import { Sabor } from 'src/app/models/sabor';
import { size } from 'src/app/models/size';
import { SaborService } from 'src/app/sabor/sabor.service';
import eventService from 'src/app/services/event.service';
import { SizeService } from 'src/app/size/size.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  sabores!: Event;
  Nsabores!: number;

  onSaboresChange($event: Event) {
    this.sabores = $event;
  }


tamanhos : size[] = [];
saboresList : Sabor[]  = [];



  @Output () addPizza = new EventEmitter<item>();

  sizeHttp = inject(SizeService);
  saborHttp = inject(SaborService);

  
  sizeSelected!: size;

  sizeSelect(item: size){
    console.log(item);
    this.Nsabores = item.nsabor;

    console.log(this.Nsabores)

  }


  


  ngOnInit(): void {

    this.sizeHttp.findAll().subscribe((sabor: size[]) => {

      this.tamanhos = sabor;

      console.log(this.sabores);

    });


    this.saborHttp.getAllSabor().subscribe((sabor: Sabor[]) => {

      this.saboresList = sabor;

      console.log(this.sabores);

    });


  }


  // PizzaService = inject(ItemService);


  PizzaForm = new FormGroup({



  });



  submitForm() {
    const Pizza_dto = {
   
    }

    // eventService.emit("addPizza", new item( ));




  }




}
