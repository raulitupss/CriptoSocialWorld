import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<any> {
    const url = 'https://localhost:7188/publicaciones';
    return this.http.get(url)
      .pipe(
        map(response => {
          // Aquí podemos transformar la respuesta si es necesario
          return response;
        })
      );
  }

  postPublicaciones(publicacion:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      
      })
    };
    console.log(publicacion)
    const url = 'https://localhost:7188/publicaciones';
    return this.http.post(url, publicacion,httpOptions);
  }
}
