import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirbaseserviceService } from '../firbaseservice.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private firbaseservice: FirbaseserviceService) { }

  ngOnInit() {
  }
 signUp(ngform: NgForm) {

  const email = ngform.value.email;
  const password = ngform.value.password;
  this.firbaseservice.signUp(email, password);
  console.log(ngform);
 }
}
