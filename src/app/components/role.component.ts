import { Component, OnInit } from '@angular/core';

import { Role } from '../entities/role';
import { RoleService } from '../services/role.service';
import {Router} from '@angular/router';
import {User} from '../entities/user';

@Component({
  selector: 'app-roles',
  templateUrl: '../templates/role.component.html' ,
  providers: [RoleService]
})
export class RoleComponent implements OnInit {
  currentUser: User;
  roles: Role[];
  selectedRole: Role;

  constructor(
    private router: Router,
    private roleService: RoleService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getRoles(): void {
    this.roleService.getRoles().subscribe(roles => this.roles = roles,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }


  delete(role: Role): void {
    this.roleService
      .delete(role.id)
      .subscribe(() => {
        this.roles = this.roles.filter(h => h !== role);
        if (this.selectedRole === role) { this.selectedRole = null; }
      });
  }

  ngOnInit(): void {
    this.getRoles();
  }

  onSelect(role: Role): void {
    this.selectedRole = role;
  }

  goToDetail(): void {
    this.router.navigate(['/role-details', this.selectedRole.id]);
  }
}
