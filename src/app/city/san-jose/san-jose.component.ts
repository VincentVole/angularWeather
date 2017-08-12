import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  weather:object;

  constructor(private _http:HttpService) { 
  	this.getWeather();
  }

  ngOnInit() {
  }

  getWeather(){
  	this._http.getWeather('sanjose')
  	.then((weather)=>{
  		this.weather = weather;
  	})
  	.catch((err)=>{
  		console.log(err);
  	});
  }
}
