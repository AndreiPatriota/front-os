import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente
  nome: FormControl
  cpf: FormControl
  telefone: FormControl

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.cliente = {
      nome: '',
      cpf: '',
      telefone: ''
    }

    this.nome = new FormControl('', [Validators.minLength(5)])
    this.cpf = new FormControl('', [Validators.minLength(11)])
    this.telefone = new FormControl('', [Validators.minLength(11)])
  }

  ngOnInit() {
    const idCliente = Number(this.route.snapshot.paramMap.get('id'))
    this.service.findById(idCliente).subscribe((inHttpResposne) => {
      this.cliente = inHttpResposne
    })
  }

  update() {
    this.service.update(this.cliente).subscribe((inHttpResposne) => {
      this.service.message('Cadastro do Cliente Atualizado com Sucesso!')
      this.router.navigate(['/clientes'])
    }, (httpError) => {
      if (httpError.error.error.match('já cadastrado'))
        this.service.message(httpError.error.error)
      else if (httpError.error.listadeErros[0].messagemErro.match('(CPF)'))
        this.service.message('CPF inválido!')
    })
  }

  cancelaCadastro() {
    this.router.navigate(['/clientes'])
  }

  validaNome() {
    return this.nome.invalid
      ? 'O nome deve ter entre 5 e 100 caractecres'
      : false
  }

  validaCpf() {
    return this.cpf.invalid
      ? 'O CPF deve ter entre 11 e 15 caracteres'
      : false
  }

  validaTelefone() {
    return this.telefone.invalid
      ? 'O telefone deve ter entre 8 e 18 caractecres'
      : false
  }

}
