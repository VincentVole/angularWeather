import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }

  getWeather(city){
  	return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=da24aa740529ccc523e083097baac98f')
  	.map(data => data.json())
  	.toPromise()
  }

}
