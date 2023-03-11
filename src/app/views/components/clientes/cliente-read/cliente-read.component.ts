import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent {
  listadeClientes: Cliente[] = []
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'acoes']
  dataSource = new MatTableDataSource<Cliente>(this.listadeClientes)

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(
    private service: ClienteService,
    private router: Router) { }

  ngAfterViewInit() {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe((inHttpResponse) => {
      this.listadeClientes = inHttpResponse
      this.dataSource = new MatTableDataSource<Cliente>(this.listadeClientes)
      this.dataSource.paginator = this.paginator
    })
  }

  navigate2Create() {
    this.router.navigate(['clientes/create'])
  }

}
