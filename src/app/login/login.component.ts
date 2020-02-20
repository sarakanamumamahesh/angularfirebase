import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirbaseService } from '../services/firbase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseservice: FirbaseService) { }

  ngOnInit() {
  }
  onSignIn(ngform: NgForm) {
    const email = ngform.value.email;
    const password = ngform.value.password;
    this.firebaseservice.signIn(email, password);
  }
  gSign() {
console.log('buttonclicked');
this.firebaseservice.googleSignin();
  }
  fSign() {
    this.firebaseservice.facebookSignin();

  }
  tSign() {

    this.firebaseservice.twitterSignin();
  }
  gitSign() {
    this.firebaseservice.githubSignin();

  }
}
