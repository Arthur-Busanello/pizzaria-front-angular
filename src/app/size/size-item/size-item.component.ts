import { Component, Input, OnInit, inject } from '@angular/core';
import { size } from 'src/app/models/size';
import { SizeService } from '../size.service';
import eventService from 'src/app/services/event.service';

@Component({
  selector: 'app-size-item',
  templateUrl: './size-item.component.html',
  styleUrls: ['./size-item.component.scss']
})
export class SizeItemComponent implements OnInit {

  sizeService = inject(SizeService);
  ngOnInit(): void {


  }

  @Input() size!: size;

  tamanho!: string;
  nsabor!: number;

deleteItem(){

  this.sizeService.deletesize(this.size.id);
  eventService.emit("deleteSize", this.size);


} 
}
