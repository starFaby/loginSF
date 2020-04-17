import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../models/signin';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  API_URI = environment.URL_SERVICE;
  API_URI_IMAGE = environment.URL_SERVICE_IMAGE;
  constructor(private http: HttpClient) { }
  onCloseLogout() {
    return this.http.get(`${this.API_URI}/logout`);
  }
}
