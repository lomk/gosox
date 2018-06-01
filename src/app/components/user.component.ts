import { Component, OnInit }    from '@angular/core';

import { User }              from '../entities/user';
import { UserService }       from '../services/user.service';
import {Router}                 from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: '../html/user.component.html' ,
  providers: [UserService]
})
export class UserComponent implements OnInit {
  currentUser: User;
  user: User;
  selectedUser: User;
  restError: String;

  constructor(
    private router: Router,
    private userService: UserService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(user => this.user = user,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
