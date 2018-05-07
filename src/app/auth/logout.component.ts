
import {AuthService}       from './auth.service';
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `<h1>Logout</h1>`,
  providers: [AuthService]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit(): void { console.log('Constructor initialised');
    this.authService.logout().subscribe();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']); }
}
