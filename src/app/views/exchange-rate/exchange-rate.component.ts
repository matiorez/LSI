import { Component, DoCheck, OnInit } from '@angular/core';
import { ExchangeRateService } from 'src/app/api-exchange-rate/exchange-rate.service';
import { ExchangeRateData } from './exchange-rate.model';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit, DoCheck {
  rates: ExchangeRateData[] = [];
  first = 0;
  rows = 10;
  todayDate = new Date();
  date: Date = new Date();
  error: string = "";
  isDark: boolean = false;
  stateOptions = [{ label: 'light', value: false }, { label: 'dark', value: true }];



  constructor(private exchangeRateService: ExchangeRateService) { }
  ngDoCheck(): void {

  }

  ngOnInit(): void {

    this.exchangeRateService.getExchangeRateByDate(this.date.toISOString().split('T')[0]).subscribe(response => {
      this.rates = response[0].rates;

    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.rates ? this.first === (this.rates.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.rates ? this.first === 0 : true;
  }

  clear(table: Table) {
    table.clear();
  }

  refreshData(event: any) {
    this.exchangeRateService.getExchangeRateByDate(event.toISOString().split('T')[0]).subscribe(
      (response) => {
        this.rates = response[0].rates;
        console.log(this.rates);
      },

      (error) => {
        this.rates = [];
        this.error = error.error;
        console.log(error);
      }

    );
  }





}
