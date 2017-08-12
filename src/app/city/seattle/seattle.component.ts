import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather:object;

  constructor(private _http:HttpService) { 
  	this.getWeather();
  }

  ngOnInit() {
  }

  getWeather(){
  	this._http.getWeather('seattle')
  	.then((weather)=>{
  		this.weather = weather;
  	})
  	.catch((err)=>{
  		console.log(err);
  	});
  }
}
