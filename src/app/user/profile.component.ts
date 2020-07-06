import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'
import { IUser } from './user.model';

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
  private firstNameCtr : FormControl;
  private lastNameCtr: FormControl;
  private user: IUser;

  // sle note: using local variable here, instead of short hand privates in constructor. Must prepend with 'this.' in code
  public authService: AuthService;
  router: Router;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

    // Angualar binds the following with the [formGroup]="profileForm" in the HTLM
    ngOnInit() {
      this.user = this.authService.currentUser;

      this.firstNameCtr = new FormControl(this.user.firstName, [Validators.required, Validators.pattern('[A-Za-z].*')]);
      this.lastNameCtr = new FormControl(this.user.lastName, [Validators.required, Validators.pattern('[A-Za-z].*')]);
      
      this.profileForm = new FormGroup({ firstName: this.firstNameCtr, lastName: this.lastNameCtr });
  }

  Cancel() {
    this.router.navigate(['events']);
  }

  SaveProfile(formValues) {
    if (this.profileForm.valid) {
      // sle note: must your explicit this.firstName.value, when declaring explicit types.
      this.authService.UpdateCurrentUser(this.firstNameCtr.value, this.lastNameCtr.value);
      this.router.navigate(['events']);
    }
  }

  validateFirstName() {
    return this.firstNameCtr.valid || this.firstNameCtr.untouched
  }


  validateLastName() {
    return this.lastNameCtr.valid || this.lastNameCtr.untouched
  }

}
