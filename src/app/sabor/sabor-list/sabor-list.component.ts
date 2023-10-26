import { Component, Input, OnInit } from '@angular/core';
import { sabor } from 'src/app/models/sabor';
import { SaborService } from '../sabor.service';

@Component({
  selector: 'app-sabor-list',
  templateUrl: './sabor-list.component.html',
  styleUrls: ['./sabor-list.component.scss']
})
export class SaborListComponent {


 @Input() sabores : sabor[]  = [];



}
