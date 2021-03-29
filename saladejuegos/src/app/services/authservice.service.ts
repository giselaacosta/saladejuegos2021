import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// For try-catch mechanism.
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: Observable<firebase.User>;
  err: String;
  
  constructor(private firebaseAuth: AngularFireAuth,private router: Router) {
    this.user = firebaseAuth.authState;
  }

  // To signup a new user.
  signup(emailAddress: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(value => {
        console.log('Success! User is successfully registered.', value.user.email);
        this.router.navigate(['home'])  

      })
      .catch(error => {
        this.err = error.message;
        this.router.navigate(['error'])  
        console.log('Something went wrong:', error);
      });
  }

  // To login a valid user.
  login(emailAddress: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(emailAddress, password)
      .then(value => {
        console.log('User successfully logged in!');
        this.router.navigate(['home'])  

      })
      .catch(error => {
        this.err = error.message;
        this.router.navigate(['error'])     

       // console.log('Something went wrong:', error);
      });
  }

   // To logout an authenticated user.
   salir() {
    this.router.navigate(['login'])     

  }
  atras() {
    this.router.navigate(['home'])     

  }


  // To logout an authenticated user.
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.router.navigate(['login'])     

  }
}
