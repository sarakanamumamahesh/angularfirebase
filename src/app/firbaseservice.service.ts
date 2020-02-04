import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class FirbaseserviceService {

  constructor() {
    firebase.initializeApp(environment.firebase);
   }
  signUp(email: string, password: string) {
   firebase.auth().createUserWithEmailAndPassword(email, password).catch(
     error => console.log(error)
   );
  }
  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    ).then(
      response => console.log(response)
    );
  }
  googleSignin() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      response => console.log(response)
    ).catch(
      error => console.log(error)
    )
    ;
  }
  logout() {
    firebase.auth().signOut().catch(
      error => console.log(error)
    );
  }
}
