import {RoleService} from '../services/role.service';
import {Role} from '../entities/role';
import {UserProfileService} from '../services/user-profile.service';
import {UserProfile} from '../entities/user-profile';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from "../entities/user";

@Component({
  selector: 'local-ip-form',
  templateUrl: '../html/user-profile-form.component.html',
  providers: [
    UserProfileService]
})
export class UserProfileFormComponent implements OnInit {
  userProfile = new UserProfile();
  roles: Role[];
  error: String;
  currentUser: User;
  restError: String;

  constructor(private router: Router,
              private userProfileService: UserProfileService,
              private roleService: RoleService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getData(): void {
  }
  ngOnInit(): void {
    this.getData();
  }

  onFormSubmit(form: NgForm) {
    const newUserProfile = new UserProfile();
    newUserProfile.firstName = form.controls['firstName'].value;
    newUserProfile.lastName = form.controls['lastName'].value;
    newUserProfile.userGender = form.controls['userGender'].value;
    newUserProfile.user = this.currentUser;

    this.userProfileService.create(newUserProfile)
      .subscribe(userProfile => {
        this.userProfile = userProfile;
        this.router.navigate([this.currentUser.role.name.toLowerCase() + '/userProfiles'])
          .catch(error =>  console.error('asdasdasdasdasd'));
      });
  }
}
