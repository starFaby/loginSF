import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Girl } from '../models/girl';

@Injectable({
  providedIn: 'root'
})
export class GirlService {
  API_URI = environment.URL_SERVICE;
  API_URI_IMAGE = environment.URL_SERVICE_IMAGE;
  constructor(private http: HttpClient) { }
  onGetGirls() { //  Observable<any>
    return this.http.get<Girl[]>(`${this.API_URI}/girl`);
   }
   onGetGirl(id: string) {
    return this.http.get(`${this.API_URI}/girl/${id}`);
   }
   onDeleteGirl(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/girl/${id}`);
   }
   onSaveGirl(girl: Girl) {
     const newGirl: Girl = {
          title: girl.title,
          url: girl.url,
          description: girl.description,
          iduser: girl.iduser
     };
     return this.http.post(`${this.API_URI}/girl`, newGirl);
   }
 /*  onUpdateGirl(id: string, girl: Girl): Observable<any> {
     const fd = new FormData();
     fd.append('nombre', categoria.nombre);
     fd.append('image', categoria.image);
     fd.append('estado', categoria.estado);
     return this.http.put(`${this.API_URI}/categoria/${id}`, fd);*/
}
