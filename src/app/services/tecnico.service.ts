import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUrl: String = enviroment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Tecnico[]> {
    const url = this.baseUrl + '/tecnicos';
    return this.httpClient.get<Tecnico[]>(url);
  }
}
