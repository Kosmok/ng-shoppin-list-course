import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;

    constructor(private router: Router) { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth()
                    .currentUser
                    .getIdToken()
                    .then(
                        (token: string) => {
                            this.token = token;
                        }
                    );
                    this.router.navigate(['/']);
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    logout() {
        firebase.auth().signOut();
    }

    getToken() {
        if (this.token) {
            firebase.auth()
                .currentUser
                .getIdToken()
                .then(
                    (token: string) => this.token = token
                    );
                    return this.token;
        }
        return null;
      }

      isAuthenticated() {
          return this.token != null;
      }
}
