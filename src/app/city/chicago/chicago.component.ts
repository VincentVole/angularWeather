import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather:object;

  constructor(private _http:HttpService) { 
  	this.getWeather();
  }

  ngOnInit() {
  }

  getWeather(){
  	this._http.getWeather('chicago')
  	.then((weather)=>{
  		this.weather = weather;
  	})
  	.catch((err)=>{
  		console.log(err);
  	});
  }
}
