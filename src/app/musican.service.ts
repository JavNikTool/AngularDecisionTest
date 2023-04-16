import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { IMusican } from "./musican";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class MusicanService {
  private musicanUrl = 'api/get'
  private log(message: string) {
    this.messageService.add(`MusicanService: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  getMusicans(): Observable<IMusican[]>{
    return this.http.get<IMusican[]>(this.musicanUrl)
      .pipe(
        tap(_ => this.log('выбираем музыкантов')),
        catchError(this.handleError<IMusican[]>('getMusicans', []))
      );
}
  getMusican(id: number): Observable<IMusican>{
    const url = `${this.musicanUrl}/${id}`;
    return this.http.get<IMusican>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<IMusican>(`getHero id=${id}`))
    );
  }


  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
}
