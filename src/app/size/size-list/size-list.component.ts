import { Component, Input } from '@angular/core';
import { size } from 'src/app/models/size';

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrls: ['./size-list.component.scss']
})
export class SizeListComponent {

  @Input() sizes : size[] = [];

}
