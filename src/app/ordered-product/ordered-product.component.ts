import { Component, OnInit }    from '@angular/core';

import { User }              from './ordered-product';
import { UserService }       from './ordered-product.service';
import {Router}                 from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './ordered-product.component.html' ,
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
