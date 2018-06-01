import { Component, OnInit }    from '@angular/core';

import { UserProfile }              from '../entities/user-profile';
import { UserProfileService }       from '../services/user-profile.service';
import {Router}                 from '@angular/router';
import {User} from "../entities/user";

@Component({
  selector: 'app-userProfile-profile',
  templateUrl: '../html/user-profile.component.html' ,
  providers: [UserProfileService]
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  userProfiles: UserProfile[];
  selectedUserProfile: UserProfile;
  restError: String;

  constructor(
    private router: Router,
    private userProfileService: UserProfileService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getUserProfiles(): void {
    this.userProfileService.getUserProfiles().subscribe(userProfiles => this.userProfiles = userProfiles,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }


  ngOnInit(): void {
    this.getUserProfiles();
  }

  onSelect(userProfile: UserProfile): void {
    this.selectedUserProfile = userProfile;
  }

}
