import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './views/exchange-rate/exchange-rate.component';

const routes: Routes = [
  { path: 'kursy', component: ExchangeRateComponent },
  { path: '', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
