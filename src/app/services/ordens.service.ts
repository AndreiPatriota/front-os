import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { enviroment } from 'src/enviroments/enviroment';
import { Ordem } from '../models/ordem';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrdensService {

  baseUrl: String

  constructor(
      private http: HttpClient,
      private snackBar: MatSnackBar) {
      this.baseUrl = enviroment.baseUrl
  }

  findAll(): Observable<Ordem[]> {
      const url = `${this.baseUrl}/ordens`
      return this.http.get<Ordem[]>(url)
  }

  findById(inId: Number): Observable<Ordem> { 
      const url = `${this.baseUrl}/ordens/${inId}`
      return this.http.get<Ordem>(url)
  }

  create(inCliente: Ordem): Observable<Ordem> {
      const url = `${this.baseUrl}/ordens`
      return this.http.post<Ordem>(url, inCliente)
  }

  update(inCliente: Ordem): Observable<Ordem> {
      const url = `${this.baseUrl}/ordens/${inCliente.id}`
      return this.http.put<Ordem>(url, inCliente)
  }

  delete(inCliente: Ordem): Observable<Ordem> {
      const url = `${this.baseUrl}/ordens/${inCliente.id}`
      return this.http.delete<Ordem>(url)
  }

  message(inMessage: String) {
      this.snackBar.open(`${inMessage}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
      })
    }
}
