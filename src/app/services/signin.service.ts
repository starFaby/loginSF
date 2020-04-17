import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../models/signin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  API_URI = environment.URL_SERVICE;
  API_URI_IMAGE = environment.URL_SERVICE_IMAGE;
  constructor(private http: HttpClient, private router: Router) { 
    this.onGetId();
  }
  onSaveSignin(signin: Signin) {
    const newSignin: Signin = {
      email: signin.email,
      password: signin.password,
    };
    return this.http.post(`${this.API_URI}/signin`, newSignin);
  }
  onLoggedIn() {
    return !!localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.onGetId();
    this.router.navigate(['/personForm']);
  }
  onGetToken() {
    return localStorage.getItem('token');
  }
  onGetId() {
    console.log('este es la id del usuario en general y donde sea');
    console.log(localStorage.getItem('id'));
    return localStorage.getItem('id');
  }
}
