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
import { News } from '../interfaces/news.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private apiURL: String = this.configService.getApiURL() + 'news';
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
  public getNews(): Observable<News[]> {
    return this.http
      .get<News[]>(this.apiURL + '/news')
      .pipe(catchError(this.handleError<News[]>('getNews', [])));
  }

  public postNews(news: News): Observable<News> {
    return this.http
      .post<News>(this.apiURL + '/new', news, this.httpOptions)
      .pipe(catchError(this.handleError<News>('postNews')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public deleteNew(idNew: number): Observable<News> {
    return this.http
    .delete<News>(`${this.apiURL + "/delete-new"}/${idNew}`)
    .pipe(catchError(this.handleError<News>('delete')));
  }

}
