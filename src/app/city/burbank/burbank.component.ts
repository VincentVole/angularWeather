import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

	weather:object;

  constructor(private _http:HttpService) { 
  	this.getWeather();
  }

  ngOnInit() {
  }

  getWeather(){
  	this._http.getWeather('burbank')
  	.then((weather)=>{
  		this.weather = weather;
  	})
  	.catch((err)=>{
  		console.log(err);
  	});
  }
}
