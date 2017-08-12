import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './city/burbank/burbank.component';
import { ChicagoComponent } from './city/chicago/chicago.component';
import { DallasComponent } from './city/dallas/dallas.component';
import { SanJoseComponent } from './city/san-jose/san-jose.component';
import { SeattleComponent } from './city/seattle/seattle.component';
import { DcComponent } from './city/dc/dc.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component:BurbankComponent,
    children: []
  },
  {
  	path: 'chicago', component:ChicagoComponent
  },
  {
  	path: 'dallas', component:DallasComponent
  },
  {
  	path: 'sanJose', component:SanJoseComponent
  },
  {
  	path: 'seattle', component:SeattleComponent
  },
  {
  	path: 'dc', component:DcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
