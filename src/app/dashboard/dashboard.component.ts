import { Component, OnInit } from '@angular/core';
import { IMusican } from "../musican";
import { MusicanService } from "../musican.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  musicians: IMusican[] = [];

  constructor(private musiciansService: MusicanService) { }

  ngOnInit(): void {
    this.getMusicans();
  }

  getMusicans(): void {
    this.musiciansService.getMusicans()
      .subscribe(musicians => this.musicians = musicians.slice(1, 5));
  }

}
