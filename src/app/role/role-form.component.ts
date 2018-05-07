import {Component, OnInit}      from '@angular/core';
import {RoleService}            from './role.service';
import {Role}                   from './role';
import {Router}                 from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../user/user';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  providers: [ RoleService]
})
export class RoleFormComponent implements OnInit {
  role = new Role();
  error: String;
  currentUser: User;

  constructor(private router: Router,
              private roleService: RoleService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
  }

  goToDetail(): void {
    this.router.navigate(['/role-details']);
  }

  onFormSubmit(form: NgForm) {
    const newRole = new Role();
    newRole.name = form.controls['name'].value;
    this.roleService.create(newRole)
      .subscribe(role => {
        this.role = role;
        this.router.navigate([this.currentUser.role.name.toLowerCase() + '/roles'])
          .catch(error =>  console.error('asdasdasdasdasd'));
      });
  }
}
