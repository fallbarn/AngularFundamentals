import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators,  } from '@angular/forms'
//import { AuthService } from './auth.service';
import { Router } from '@angular/router'
import { ISession } from '../shared/event.model';

/*
 * sle note: Authodox html (with css selector) styling 
 * <style>
     body {background-color: powderblue;}
     h1   {color: blue;}
     p    {color: red;}
   </style>
 */

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [
    `
      em {float:right; color#E05C65; padding-left; 10px;}
      .error input, .error select, .error textarea {background-color:#E05C65; }
      .error ::-webkit-input-placeholder { color#999; }
      .error ::-moz-placeholder { color#999; }
      .error ::-moz-placeholder { color#999; }
      .error ::ms-input-placeholder { color#999; }
    `]
})

export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelSession = new EventEmitter();

  public name: FormControl;
  public presenter: FormControl;
  public duration: FormControl;
  public level: FormControl;
  public abstract: FormControl;
  public newSessionForm: FormGroup;

  private router: Router
  // sle note: using local variable here, instead of short hand privates in constructor. Must prepend with 'this.' in code
  //public authService: AuthService;

  constructor(router: Router) {
    this.router = router;
  }

  // Angualar binds the following with the [formGroup]="newSessionForm" in the HTLM
  ngOnInit() {

    // sle note: validator are set up like this
    this.name = new FormControl('', [Validators.required]);
    this.presenter = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required]);
    this.level = new FormControl('', [Validators.required]);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords]);

    // sle note: then the validators must be assigned to the relavant form controls
    this.newSessionForm = new FormGroup(
      {
        name: this.name,
        presenter: this.presenter,
        duration: this.duration,
        level: this.level,
        abstract: this.abstract
      });

    }

  private restrictedWords() {
    return (control: FormControl): { [key: string]: any } => {

      return control.value.includes('foo') ? { 'restrictedWords': 'foo' } : null;
    }
  }

  saveSession(formValues) {
    //if (this.profileForm.valid) {
    //  sle note: you must use explicitly this.firstName.value, when declaring explicit types.
    //  this.authService.UpdateCurrentUser(this.firstName.value, this.lastName.value);
    //  this.router.navigate(['events']);
    //}

    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []

    }
    //console.log(session)
    /*
     * This is caught by the calling
     *
     * <create-session *ngIf="addMode" (saveNewSession)="saveNewSession($event)" ></create-session>
     * 
     * in event-details.component.html
     */
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelSession.emit();
   // this.router.navigate(['events']);
  }
 
}
