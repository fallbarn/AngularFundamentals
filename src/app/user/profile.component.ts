import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

/*
 * sle note: Authodox html (with css selector) styling 
 * <style>
     body {background-color: powderblue;}
     h1   {color: blue;}
     p    {color: red;}
   </style>
 */

@Component({
  templateUrl: './profile.component.html',
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

export class ProfileComponent implements OnInit
{
  private profileForm : FormGroup;
  private firstName : FormControl;
  private lastName : FormControl;

  // sle note: using local variable here, instead of short hand privates in constructor. Must prepend with 'this.' in code
  authService: AuthService;
  router: Router;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  // Angualar binds the following with the [formGroup]="profileForm" in the HTLM
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({ firstName: this.firstName, lastName: this.lastName });
  }

  Cancel() {
    this.router.navigate(['events']);
  }

  SaveProfile(formValues) {
    if (this.profileForm.valid) {
      // sle note: must your explicit this.firstName.value, when declaring explicit types.
      this.authService.UpdateCurrentUser(this.firstName.value, this.lastName.value);
      this.router.navigate(['events']);
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }


  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

}
