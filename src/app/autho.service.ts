import {inject, Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "@angular/fire/auth";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  fireAuth = inject(Auth);
  logged : boolean = false;
  register(
    email: string,
    username: string,
    password: string
  ):Observable<void> {
    const promise = createUserWithEmailAndPassword(this.fireAuth, email, password).then((res)=>{this.logged=true});
    return from(promise);
  }
  login(
    email: string,
    password: string
  ):Observable<void> {
    const promise = signInWithEmailAndPassword(this.fireAuth, email, password).then(()=>{this.logged=true;});
    return from(promise);
  }
  constructor() { }
}