import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpClientModule,
  HttpParams,
} from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { MessageService } from './message.service';
import { Event } from '../interfaces/event.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {

  private apiURL: String = this.configService.getApiURL() + 'events';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    public http: HttpClient,
    public configService: ConfigurationService,
    public messageService: MessageService,
  ) {}

  private log(message: string) {
    this.messageService.add(`NewsService: ${message}`);
  }
  public getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(this.apiURL + '/events')
      .pipe(catchError(this.handleError<Event[]>('getEvents', [])));
  }

  public postEvents(event: Event): Observable<Event> {
    return this.http
      .post<Event>(this.apiURL + '/event', event, this.httpOptions)
      .pipe(catchError(this.handleError<Event>('postEvents')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public deleteEvent(idEvent: number): Observable<Event> {
    return this.http
    .delete<Event>(`${this.apiURL + "/delete-event"}/${idEvent}`)
    .pipe(catchError(this.handleError<Event>('delete')));
  }

}
