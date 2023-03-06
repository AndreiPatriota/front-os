import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {

  cliente: Cliente
  nome: FormControl
  cpf: FormControl
  telefone: FormControl

  constructor(
    private service: ClienteService,
    private router: Router
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

  create() {
    this.service.create(this.cliente).subscribe((inHttpResposne) => {
      this.router.navigate(['/clientes'])
      this.service.message('Cliente cadastrado com sucesso!')
    }, (inHttpError) => {
      if (inHttpError.error.error.match('já cadastrado'))
        this.service.message(inHttpError.error.error)
      else if (inHttpError.error.listadeErros[0].messagemErro.match('(CPF)'))
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
