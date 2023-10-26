import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { size } from 'src/app/models/size';
import eventService from 'src/app/services/event.service';
import { SizeService } from '../size.service';

@Component({
  selector: 'app-size-add',
  templateUrl: './size-add.component.html',
  styleUrls: ['./size-add.component.scss']
})
export class SizeAddComponent {


  @Output () addSize = new EventEmitter<size>();

  sizeService = inject(SizeService);


  sizeForm = new FormGroup({
    sizeTamanho: new FormControl(),
    sizeNsabor: new FormControl(),
    sizeNpedacos: new FormControl()
  });

  ngOnInit(): void {

  }


  submitForm() {
    const size_dto = {
      tamanho:this.sizeForm.value.sizeTamanho,
      nsabor:this.sizeForm.value.sizeNsabor,
      npedacos: this.sizeForm.value.sizeNpedacos
    }





     this.sizeService.addSize(size_dto).subscribe(size =>
      {
        eventService.emit("addSize", size_dto);
        console.log("request enviada" + size_dto);

      })

    this.sizeForm.reset();




  }



}
