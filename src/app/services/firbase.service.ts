import { Injectable, RootRenderer } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirbaseService {
  test ;
  token: string;
  constructor(private router: Router, private http: HttpClient) {
    firebase.initializeApp(environment.firebase);
   }
  signUp(email: string, password: string) {
   firebase.auth().createUserWithEmailAndPassword(email, password).catch(
     error => error
   ).then(

     response => {
      console.log(response);
      if (response.message !== 'The email address is badly formatted.') {
      this.router.navigate(['/']);
      }

     }
   );

  }
  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    ).then(
      response => {

        if (response !== undefined) {
        this.router.navigate(['/data']);
        }
      }
    );
  }
  googleSignin() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      response => {
        this.router.navigate(['data']);
        firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            ).catch(
              error => console.log(error)
            );

      }

    ).catch(
      error => console.log(error)
    )
    ;
  }
  facebookSignin() {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      response => console.log(response)
    );
  }
  twitterSignin() {
    firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(
    );
  }
  githubSignin() {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(
    );
  }
  emailSignin() {
    firebase.auth().signInWithPopup(new firebase.auth.EmailAuthProvider());
  }
  logout() {
    firebase.auth().signOut(
    ).catch(
      error => console.log(error)
    );
    this.token = null;
    this.router.navigate(['/']);
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email);
  }
  user() {
   return firebase.auth().currentUser;
  }
  sendData(data: {}) {
    return this.http.post('https://angularfirebase-4fc73.firebaseio.com/messages.json', data).subscribe(
      error => console.log(error)

    );
  }
  getData() {
    return this.http.get('https://angularfirebase-4fc73.firebaseio.com/messages.json');
  }
}
