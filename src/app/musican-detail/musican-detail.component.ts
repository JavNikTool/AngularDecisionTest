import { Component, Input } from '@angular/core';
import { IMusican } from "../musican";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MusicanService } from "../musican.service";

@Component({
  selector: 'app-musican-detail',
  templateUrl: './musican-detail.component.html',
  styleUrls: ['./musican-detail.component.css']
})
export class MusicanDetailComponent {
  @Input() musican?: IMusican;
  constructor(
    private route: ActivatedRoute,
    private musicanService: MusicanService,
    private location: Location
  ) {}

  ngOnInit(){
    this.getMusican();
  }
  getMusican(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let a = this.musicanService.getMusican(id)
      .subscribe(musican => this.musican = {...musican})
    console.log(a)
  }

  goBack(): void{
    this.location.back();
  }

}
