import { Component, Input, OnInit } from '@angular/core';
import { size } from 'src/app/models/size';

@Component({
  selector: 'app-size-item',
  templateUrl: './size-item.component.html',
  styleUrls: ['./size-item.component.scss']
})
export class SizeItemComponent implements OnInit {
  ngOnInit(): void {


  }

  @Input() size!: size;

  tamanho!: string;
  nsabor!: number;

}
