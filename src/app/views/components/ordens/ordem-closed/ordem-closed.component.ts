import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ordem } from 'src/app/models/ordem';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdensService } from 'src/app/services/ordens.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-closed',
  templateUrl: './ordem-closed.component.html',
  styleUrls: ['./ordem-closed.component.css']
})
export class OrdemClosedComponent implements AfterViewInit {
  listadeOrdens: Ordem[] = [];

  displayedColumns: string[] = [
    'cliente',
    'tecnico',
    'abertura',
    'fechamento',
    'prioridade',
    'status',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Ordem>(this.listadeOrdens);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private ordemService: OrdensService,
    private router: Router,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService
  ) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll() {
    this.ordemService.findAll().subscribe(
      (inOrdens) => {
        /* this.listadeOrdens = inOrdens; */
        inOrdens.forEach((ordem) => {
          if (ordem.status == 'ENCERRADO') {
            this.listadeOrdens.push(ordem);
          }
        });
        this.listadeOrdens.forEach((ordem) => {
          this.clienteService.findById(ordem.idCliente).subscribe(
            (inCliente) => {
              ordem.idCliente = inCliente.nome;
            },
            (httpError) => {
              console.log(httpError);
            }
          );

          this.tecnicoService.findById(ordem.idTecnico).subscribe(
            (inTecnico) => {
              ordem.idTecnico = inTecnico.nome;
            },
            (httpError) => {
              console.log(httpError);
            }
          );
        });
        console.log(inOrdens);
        this.dataSource = new MatTableDataSource<Ordem>(this.listadeOrdens);
        this.dataSource.paginator = this.paginator;
      },
      (httpErro) => {
        console.log(httpErro);
      }
    );
  }

  prioridade(inPrioridade: any): String {
    switch (inPrioridade) {
      case 'ALTA':
        return 'alta';
      case 'MEDIA':
        return 'media';
      default:
        return 'baixa';
    }
  }
}

