/**
 * Created by rudi on 09/04/16.
 */
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {SignInService} from "./services/signin-service";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
  selector: 'sign-in',
  templateUrl: 'app/signin.component.html',
  providers: [SignInService],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

export class SignInComponent {

  constructor(private router:Router,
              private signInService:SignInService) {
  }

  login(email, password) {
    this.signInService.signIn(email, password)
      .subscribe(() => {
        this.router.navigate(['/Timeline']);
      }, this.handleError)
    ;

  }

  handleError(error) {
    switch (error.status) {
      case 401:
        // FIXME: use feedback panel or toast
        alert("Nope!");
    }
  }

}
