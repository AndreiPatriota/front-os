import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Ordem } from 'src/app/models/ordem';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdensService } from 'src/app/services/ordens.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-create',
  templateUrl: './ordem-create.component.html',
  styleUrls: ['./ordem-create.component.css'],
})
export class OrdemCreateComponent implements OnInit {
  ordem: Ordem = {
    prioridade: '',
    observacoes: '',
    status: '',
    idTecnico: '',
    idCliente: '',
  };

  listadeTecnicos: Tecnico[] = [];
  listadeClientes: Cliente[] = [];

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private service: OrdensService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listaTecnicos();
    this.listaClientes();
  }

  cancela() {
    this.router.navigate(['ordens'])
  }

  create() {
    this.service.create(this.ordem).subscribe(
      (incoming) => {
        this.service.message('Ordem criada com sucesso!');
        this.router.navigate(['ordens']);
      },
      (httpError) => {
        this.service.message(httpError.error.listadeErros[0].messagemErro);
      }
    );
  }

  listaTecnicos() {
    this.tecnicoService.findAll().subscribe(
      (incoming) => {
        this.listadeTecnicos = incoming;
      },
      (httpError) => {
        console.log(httpError);
      }
    );
  }

  listaClientes() {
    this.clienteService.findAll().subscribe(
      (incoming) => {
        this.listadeClientes = incoming;
      },
      (httpError) => {
        console.log(httpError);
      }
    );
  }
}
