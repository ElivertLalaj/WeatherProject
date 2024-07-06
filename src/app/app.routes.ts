import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: '' , component: HomeComponent},
    {path: 'page2' , component: Page2Component},
    {path: 'weather' , component: WeatherComponent},


];
