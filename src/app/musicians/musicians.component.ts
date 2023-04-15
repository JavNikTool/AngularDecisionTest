import { Component } from '@angular/core';
import { IMusican } from "../musican";
import { MusicanService } from "../musican.service";

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.css']
})
export class MusiciansComponent {
  musicians: IMusican[] = [];

  constructor(private musicanService: MusicanService) {
  }

  getMusicans():void{
    this.musicanService.getMusicans()
      .subscribe(musicans => this.musicians = musicans);
  }

  ngOnInit(): void{
    this.getMusicans();
  }

  SelectedMusicians?: IMusican;
  onSelected(musican: IMusican):void{
    this.SelectedMusicians = musican;
  }
}
