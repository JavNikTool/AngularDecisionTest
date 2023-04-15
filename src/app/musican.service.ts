import { Injectable } from '@angular/core';
import { IMusican } from "./musican";
import { MUSICAN } from "./mosc-musican";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class MusicanService {
  getMusicans(): Observable<IMusican[]>{
    const musican = of(MUSICAN);
    this.messageService.add('Музыканты загружены');
    return musican;
}
  getMusican(id: number): Observable<IMusican>{
    const musican = MUSICAN.find(h => h.id === id)!;
    this.messageService.add(`HeroService: Найден музыкант ${musican.name}, id=${id}`);
    return of(musican);
  }
  constructor(private messageService: MessageService) { }
}
