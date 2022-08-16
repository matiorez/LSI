import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateResponse } from '../views/exchange-rate/exchange-rate.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  domain = 'https://api.nbp.pl/api/';

  constructor(private httpClient: HttpClient) { }

  getExchangeRateToday(): Observable<ExchangeRateResponse[]> {
    return this.httpClient.get<ExchangeRateResponse[]>(`${this.domain}exchangerates/tables/A/?format=json`);

  }

  getExchangeRateByDate(date: string): Observable<ExchangeRateResponse[]> {
    return this.httpClient.get<ExchangeRateResponse[]>(`${this.domain}/exchangerates/tables/A/${date}/?format=json`);

  }
}
