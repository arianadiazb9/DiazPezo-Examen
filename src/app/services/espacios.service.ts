import { Espacios } from './../models/espacios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) { }

  getEspacios(){
    return this.http.get<Espacios[]>(this.basePath)
  }

  newEspacios(espacios: Espacios){
    return this.http.post<Espacios>(this.basePath,espacios)
  }
}
