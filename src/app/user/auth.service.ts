import { Injectable } from '@angular/core';
import {IUser, User} from './user.model'

@Injectable()
export class AuthService {

  // sle note: fake value for now-on.
  public currentUser: User;


  loginUser(userName: string, password: string) {
   
    this.currentUser = new User(1, userName, 'John', 'Papa');

  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  UpdateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
