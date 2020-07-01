import { Component, OnInit} from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Component({
  templateUrl : './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  // sle note: using local variable here, instead of short hand privates in constructor.
  authService: AuthService;
  router: Router;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({firstName:firstName, lastName:lastName})
  }

  Cancel() {
    this.router.navigate(['events']);
  }

  SaveProfile(formValues) {
    this.authService.UpdateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

}
