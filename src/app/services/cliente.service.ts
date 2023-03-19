import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Tecnico } from '../models/tecnico';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    baseUrl: String

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar) {
        this.baseUrl = enviroment.baseUrl
    }

    findAll(): Observable<Cliente[]> {
        const url = `${this.baseUrl}/clientes`
        return this.http.get<Cliente[]>(url)
    }

    findById(inId: Number): Observable<Cliente> { 
        const url = `${this.baseUrl}/clientes/${inId}`
        return this.http.get<Cliente>(url)
    }

    create(inCliente: Cliente): Observable<Cliente> {
        const url = `${this.baseUrl}/clientes`
        return this.http.post<Cliente>(url, inCliente)
    }

    update(inCliente: Cliente): Observable<Cliente> {
        const url = `${this.baseUrl}/clientes/${inCliente.id}`
        return this.http.put<Cliente>(url, inCliente)
    }

    delete(inCliente: Cliente): Observable<Cliente> {
        const url = `${this.baseUrl}/clientes/${inCliente.id}`
        return this.http.delete<Cliente>(url)
    }

    message(inMessage: String) {
        this.snackBar.open(`${inMessage}`, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 4000
        })
      }
}
