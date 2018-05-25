import { Component, OnInit }    from '@angular/core';

import { User }              from '../entities/user';
import { UserService }       from '../services/user.service';
import {Router}                 from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: '../templates/user.component.html' ,
  providers: [UserService]
})
export class UserComponent implements OnInit {
  currentUser: User;
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
