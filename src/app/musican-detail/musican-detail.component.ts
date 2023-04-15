import { Component, Input } from '@angular/core';
import { IMusican } from "../musican";

@Component({
  selector: 'app-musican-detail',
  templateUrl: './musican-detail.component.html',
  styleUrls: ['./musican-detail.component.css']
})
export class MusicanDetailComponent {
  @Input() musican?: IMusican;
}
