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
import { Discount } from '../interfaces/discount.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {

  private apiURL: String = this.configService.getApiURL() + 'discounts';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    public http: HttpClient,
    public configService: ConfigurationService,
    public messageService: MessageService,
  ) {}

  private log(message: string) {
    this.messageService.add(`DiscountService: ${message}`);
  }
  public getDiscounts(): Observable<Discount[]> {
    return this.http
      .get<Discount[]>(this.apiURL + '/discount')
      .pipe(catchError(this.handleError<Discount[]>('getDiscounts', [])));
  }

  public postDiscount(discounts: Discount): Observable<Discount> {
    return this.http
      .post<Discount>(this.apiURL + '/discount', discounts, this.httpOptions)
      .pipe(catchError(this.handleError<Discount>('postDiscounts')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public deleteDiscount(idDiscount: number): Observable<Discount> {
    return this.http
    .delete<Discount>(`${this.apiURL + "/delete-discount"}/${idDiscount}`)
    .pipe(catchError(this.handleError<Discount>('delete')));
  }

}
