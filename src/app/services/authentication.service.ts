import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Authentication } from '../models/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URI = environment.URL_SERVICE;
  API_URI_IMAGE = environment.URL_SERVICE_IMAGE;
  constructor(private http: HttpClient) { }
  onGetAuthentications() { //  Observable<any>
    return this.http.get<Authentication>(`${this.API_URI}/signup`);
  }
  onGetAuthentication(id: string) {
    return this.http.get(`${this.API_URI}/signup/${id}`);
  }
  onDeleteAuthentication(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/signup/${id}`);
  }
  onSaveAuthentication(authentication: Authentication) {
    const newAuthentication: Authentication = {
      cedula: authentication.cedula,
      nombre: authentication.nombre,
      apellido: authentication.apellido,
      email: authentication.email,
      password: authentication.password,
    };
    return this.http.post(`${this.API_URI}/signup`, newAuthentication);
  }
  onLoggedIn() {
   return !!localStorage.getItem('token');
  }
}
