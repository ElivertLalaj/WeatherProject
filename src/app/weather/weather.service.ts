// src/app/weather.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

const API_KEY = 'e69316670cf5922d99f12124353dede6';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 constructor() { }

  async getWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  }

  // async getWeatherByCoords(lat: number, lon: number) {
  //   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;
  //   try {
  //     const response = await axios.get(url);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching weather data:', error);
  //     throw error;
  //   }
  // }
}
