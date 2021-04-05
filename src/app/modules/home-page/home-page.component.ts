import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[WeatherService]
})
export class HomePageComponent implements OnInit {
  weatherReports:any = [];
  resultData:any = [];
  city:string = 'indore';

  constructor(private weatherService:WeatherService,private datePipe:DatePipe) {
    this.getWeatherByCity(this.city);
  }

  ngOnInit() {
  }

  getWeatherByCity(city) {
    this.weatherService.getWeatherByCity(city).subscribe(
      (data) => {
        this.weatherReports = data['list'];
        let dt = new Set(this.weatherReports.map(report => this.datePipe.transform(report.dt_txt,'EEEE')))
        Array.from(dt).forEach((day)=>{
          this.resultData.push({
            day:day,
            reports:this.weatherReports.filter(i=>this.datePipe.transform(i.dt_txt,'EEEE') === day)
          })
        })
      }
    )
  }



}
