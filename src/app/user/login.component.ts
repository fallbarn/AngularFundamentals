import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em {float:right; color#E05C65; padding-left; 10px;}
      .error input {background-color:#E05C65; }
      .error ::-webkit-input-placeholder { color#999; }
      .error ::-moz-placeholder { color#999; }
      .error ::-moz-placeholder { color#999; }
      .error ::ms-input-placeholder { color#999; }
    `]
})

export class LoginComponent {
  constructor(private authService: AuthService, private router : Router) {

  }

  private username: string;
  private password: string;
  private mouseoverLogin: boolean;

  login(formValues) {

    this.authService.loginUser(formValues.userName, formValues.password)

    this.router.navigate(['events']);

    //console.log(formValues)
  }

  Cancel() {
    this.router.navigate(['events']);
  }
}
