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

  const email: string = ngform.value.email;
  const password: string = ngform.value.password;
 // this.firbaseservice.signUp(email, password);
  console.log(ngform.value);
 }
}
