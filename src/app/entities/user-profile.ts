import {User}       from './user';
import {UserGender} from "./user-gender";

export class UserProfile {
  id: number;
  firstName: String;
  lastName: String;
  phone: String;
  userGender: UserGender;
  user: User;
}
