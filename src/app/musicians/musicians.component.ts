import { Component } from '@angular/core';
import { IMusican } from "../musican";
import { MUSICAN } from "../mosc-musican";

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.css']
})
export class MusiciansComponent {
  musicians = MUSICAN;
}
