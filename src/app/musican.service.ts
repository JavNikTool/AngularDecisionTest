import { Injectable } from '@angular/core';
import { IMusican } from "./musican";
import { MUSICAN } from "./mosc-musican";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicanService {
  getMusicans(): Observable<IMusican[]>{
    const musican = of(MUSICAN);
    return musican;
}
  constructor() { }
}
