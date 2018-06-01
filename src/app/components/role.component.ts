import { Component, OnInit } from '@angular/core';

import { Role } from '../entities/role';
import { RoleService } from '../services/role.service';
import {Router} from '@angular/router';
import {User} from '../entities/user';

@Component({
  selector: 'app-roles',
  templateUrl: '../html/role.component.html' ,
  providers: [RoleService]
})
export class RoleComponent implements OnInit {
  currentUser: User;
  role: Role;
  selectedRole: Role;
  restError: String;

  constructor(
    private router: Router,
    private roleService: RoleService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getRole(id: number): void {
    this.roleService.getRole(id).subscribe(role => this.role = role,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
  }

  onSelect(role: Role): void {
    this.selectedRole = role;
  }

  goToDetail(): void {
    this.router.navigate(['/role-details', this.selectedRole.id]);
  }
}
