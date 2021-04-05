import { Injectable } from '@angular/core';
import { GlobalVariable } from '../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseApiUrl = GlobalVariable.BASE_API_URL;
  private APIKey = GlobalVariable.APIkey;

  constructor(private http: HttpClient) {}

  getWeatherByCity(city) {
    return this.http.get(this.baseApiUrl + 'forecast?q='+city+'&appid='+this.APIKey).pipe();
  }
  
}