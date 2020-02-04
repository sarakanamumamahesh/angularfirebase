import { Component, OnInit } from '@angular/core';
import { faUser, faKey, faMailBulk, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FirbaseserviceService } from '../firbaseservice.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fauser = faUser;
  fakey = faKey;
  famail = faMailBulk;
  faPlus = faUserPlus;
  constructor(private firebaseservice: FirbaseserviceService) { }

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
}
