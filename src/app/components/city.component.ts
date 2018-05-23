import { Component, OnInit }    from '@angular/core';

import { City }              from '../entities/city';
import {CityService} from '../services/city.service';
import {Router}                 from '@angular/router';
import {User} from "../entities/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: '../templates/city.component.html' ,
  providers: [CityService]
})
export class CityComponent implements OnInit {
  currentUser: User;
  users: City[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getCities(): void {
    this.userService.getUsers().subscribe(users => this.users = users,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }

  delete(user: User): void {
    this.userService
      .delete(user.id)
      .subscribe(() => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
