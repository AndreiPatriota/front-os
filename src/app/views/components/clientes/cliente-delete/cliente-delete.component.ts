import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})

export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente

  constructor(
    private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute
  ) {
    this.cliente = {
      id: '',
      nome: '',
      cpf: '',
      telefone: ''
    }

  }

  ngOnInit() {
    let idCliente = Number(this.route.snapshot.paramMap.get('id'))
    this.service.findById(idCliente).subscribe((inReposnse) => {
      this.cliente = inReposnse
    })
  }

  cancelaCadastro() {
    this.router.navigate(['/clientes'])
  }

  delete() {
    this.service.delete(this.cliente).subscribe((inResponse) => {
      this.router.navigate(['/clientes'])
      this.service.message('Cliente deletado com sucesso!')
    }, inHttpErro => {
      if (inHttpErro.error.error.match('ordens de serviço')) {
        this.service.message('Cliente possui ordens de serviço pendentes.')
      } else {
        console.log(inHttpErro)
      }

    });
  }
}
