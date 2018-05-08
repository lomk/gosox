import {RoleService}        from '../role/role.service';
import {Role}               from '../role/role';
import {UserService}        from './product-gender.service';
import {User}               from './product-gender';
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';
import {NgForm}             from '@angular/forms';

@Component({
  selector: 'local-ip-form',
  templateUrl: './product-gender-form.component.html',
  providers: [
    UserService,
    RoleService]
})
export class UserFormComponent implements OnInit {
  user = new User();
  roles: Role[];
  error: String;
  currentUser: User;

  constructor(private router: Router,
              private userService: UserService,
              private roleService: RoleService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getData(): void {
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
  }
  ngOnInit(): void {
    this.getData();
  }

  onFormSubmit(form: NgForm) {
    const newUser = new User();
    newUser.username = form.controls['username'].value;
    newUser.role = form.controls['role'].value;
    newUser.password = form.controls['password'].value;
    newUser.confirmPassword = form.controls['confirmPassword'].value;
    this.userService.create(newUser)
      .subscribe(user => {
        this.user = user;
        this.router.navigate([this.currentUser.role.name.toLowerCase() + '/users'])
          .catch(error =>  console.error('asdasdasdasdasd'));
      });
  }
}
