import { Component, OnInit }    from '@angular/core';
import {Router}                 from '@angular/router';
import {City}                   from "../entities/city";
import {CityService}            from "../services/city.service";
import {User}                   from "../entities/user";

@Component({
  selector: 'app-city',
  templateUrl: '../html/city.component.html' ,
  providers: [CityService]
})
export class CityComponent implements OnInit {
  currentUser: User;
  cities: City[];
  selectedCity: City;
  restError: String;

  constructor(
    private router: Router,
    private cityService: CityService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
    this.getCities();
  }

  onSelect(city: City): void {
    this.selectedCity = city;
  }

}
