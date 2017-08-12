import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { SeattleComponent } from './city/seattle/seattle.component';
import { SanJoseComponent } from './city/san-jose/san-jose.component';
import { BurbankComponent } from './city/burbank/burbank.component';
import { DallasComponent } from './city/dallas/dallas.component';
import { DcComponent } from './city/dc/dc.component';
import { ChicagoComponent } from './city/chicago/chicago.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    SeattleComponent,
    SanJoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
