import {Role}       from './role';

export class User {
  id: number;
  username: String;
  password: String;
  confirmPassword: String;
  role: Role;
}
