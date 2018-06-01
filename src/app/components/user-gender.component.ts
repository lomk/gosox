import {Component, OnInit} from '@angular/core';
import {UserGender} from '../entities/user-gender';
import {UserGenderService} from '../services/user-gender.service';
import {Router} from '@angular/router';
import {User} from "../entities/user";

@Component({
  selector: 'app-userGenders',
  templateUrl: '../html/user-gender.component.html' ,
  providers: [UserGenderService]
})
export class UserGenderComponent implements OnInit {
  currentUser: User;
  userGenders: UserGender[];
  selectedUserGender: UserGender;
  restError: String;

  constructor(
    private router: Router,
    private userGenderService: UserGenderService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getUserGenders(): void {
    this.userGenderService.getUserGenders().subscribe(userGenders => this.userGenders = userGenders,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
    this.getUserGenders();
  }

  onSelect(userGender: UserGender): void {
    this.selectedUserGender = userGender;
  }

}
