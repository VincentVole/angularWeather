import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  weather:object;

  constructor(private _http:HttpService) { 
  	this.getWeather();
  }

  ngOnInit() {
  }

  getWeather(){
  	this._http.getWeather('washingtondc')
  	.then((weather)=>{
  		this.weather = weather;
  	})
  	.catch((err)=>{
  		console.log(err);
  	});
  }
}
