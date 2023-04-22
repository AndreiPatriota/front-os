import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Ordem } from 'src/app/models/ordem';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdensService } from 'src/app/services/ordens.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-ordem-update',
  templateUrl: './ordem-update.component.html',
  styleUrls: ['./ordem-update.component.css'],
})
export class OrdemUpdateComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listaTecnicos();
    this.listaClientes();
    let idOrdem = Number(this.route.snapshot.paramMap.get('id'));
    this.service.findById(idOrdem).subscribe((incoming) => {
      console.log(incoming);
      this.ordem = incoming;
      this.converteStatusePrioridade();
    });
  }

  cancela() {
    this.router.navigate(['ordens']);
  }

  update() {
    this.service.update(this.ordem).subscribe(
      (incoming) => {
        this.service.message('Ordem atualizada com sucesso!');
        this.router.navigate(['ordens']);
      },
      (httpError) => {
        console.log(httpError);
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

  private converteStatusePrioridade() {
    if ((this.ordem.status == "ABERTO")) this.ordem.status = "0";
    else if ((this.ordem.status == "ANDAMENTO")) this.ordem.status = "1";
    else if ((this.ordem.status == "ENCERRADO")) this.ordem.status = "2";

    if ((this.ordem.prioridade == 'BAIXA')) this.ordem.prioridade = '0';
    else if ((this.ordem.prioridade == 'MEDIA')) this.ordem.prioridade = '1';
    else if ((this.ordem.prioridade == 'ALTA')) this.ordem.prioridade = '2';

    this.ordem.idCliente = this.ordem.idCliente.toString();
    this.ordem.idTecnico = this.ordem.idTecnico.toString();
  }
}
