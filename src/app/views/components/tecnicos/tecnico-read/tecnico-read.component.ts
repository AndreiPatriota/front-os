import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})
export class TecnicoReadComponent implements AfterViewInit {

  listadeTecnicos: Tecnico[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'acoes']
  dataSource = new MatTableDataSource<Tecnico>(this.listadeTecnicos)

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(
    private service: TecnicoService,
    private router: Router) { }

  ngAfterViewInit() {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.listadeTecnicos = resposta
      this.dataSource = new MatTableDataSource<Tecnico>(this.listadeTecnicos)
      this.dataSource.paginator = this.paginator
    });
  }

  navigate2Create() { 
    this.router.navigate(['tecnicos/create'])
  }
}

