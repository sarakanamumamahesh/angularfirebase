import { Component, OnInit } from '@angular/core';
import { FirbaseService } from '../services/firbase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private firebaseservice: FirbaseService) { }
  message;
  ngOnInit() {
  }
  logOut() {
  this.firebaseservice.logout();
  }
  sendData(form: NgForm) {

    const data = {message: String , id: String};
    data.message = form.value.message;
    data.id = form.value.idorinfo;
    this.firebaseservice.sendData(data);
  }
  getData() {
 const database = this.firebaseservice.getData();
 console.log(database.subscribe(
  res => this.message = res.valueOf()
 ));
  }
}
