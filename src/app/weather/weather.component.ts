import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city: string = '';
  weather: any = null;
  error: string = '';
  weatherOfCity = false

  constructor(private weatherService: WeatherService) {}

  async getWeather() {
    // this.weatherOfCity = true
    try {
      // Get the city coordinates first
      const cityWeather = await this.weatherService.getWeather(this.city);
      const lat = cityWeather.coord.lat;
      const lon = cityWeather.coord.lon;
      // Fetch detailed weather using coordinates
      // this.weather = await this.weatherService.getWeatherByCoords(lat, lon);
      this.error = '';
    } catch (err) {
      this.weather = null;
      this.error = 'City not found or error fetching weather data';
    }
  }

  // async getWeatherByCoords(lat: number, lon: number) {
  //   try {
  //     this.weather = await this.weatherService.getWeatherByCoords(lat, lon);
  //     this.error = '';
  //   } catch (err) {
  //     this.weather = null;
  //     this.error = 'Error fetching weather data';
  //   }
  // }

  useMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // this.getWeatherByCoords(position.coords.latitude, position.coords.longitude);
      });
    }
  }
}
