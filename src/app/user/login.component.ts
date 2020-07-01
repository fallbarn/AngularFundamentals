import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',

  styles: [`
    em { float:right; color:#05C65}
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
