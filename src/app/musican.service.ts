import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMusican } from "./musican";
import { MUSICAN } from "./mosc-musican";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class MusicanService {
  private musicanUrl = 'api/get'
  getMusicans(): Observable<IMusican[]>{
    return this.http.get<IMusican[]>(this.musicanUrl)
}
  getMusican(id: number): Observable<IMusican>{
    const musican = MUSICAN.find(h => h.id === id)!;
    this.messageService.add(`HeroService: Найден музыкант ${musican.name}, id=${id}`);
    return of(musican);
  }
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
}
