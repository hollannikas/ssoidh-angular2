/**
 * Created by rudi on 09/04/16.
 */
import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {UserService, UserParams} from "./services/user-service";
import {SignInService} from "./services/signin-service";
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  Control,
  ControlGroup,
  Validators
} from "angular2/common";
import {Validators as MyValidators, EMAIL_PATTERN} from "./forms/Validators";
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'sign-up',
  templateUrl: 'app/signup.component.html',
  providers: [SignInService, UserService],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
})

export class SignUpComponent {

  myForm:ControlGroup;
  name:Control;
  email:Control;
  password:Control;
  passwordConfirmation:Control;

  constructor(private router:Router,
              private userService:UserService,
              private signInService:SignInService) {
    this.initForm();
  }

  onSubmit(params:UserParams) {
    this.userService.create(params)
      .mergeMap(() => {
        return this.signInService.signIn(params.email, params.password);
      })
      .subscribe(() => {
        this.router.navigate(['/Timeline']);
      }, this.handleError)
    ;
  }

  private initForm() {
    this.name = new Control('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
    ]));
    this.email = new Control('', Validators.compose([
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]));
    this.password = new Control('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
    ]));
    this.passwordConfirmation = new Control('', Validators.compose([
      Validators.required,
      MyValidators.match(this.password),
    ]));
    this.myForm = new ControlGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    });
  }

  // FIXME error reporting + handling
  private handleError(error) {
    switch (error.status) {
      case 400:
        console.log("Email already exists?");
    }
  }

}
