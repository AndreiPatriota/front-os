import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent {

  tecnico: Tecnico
  nome: FormControl
  cpf: FormControl
  telefone: FormControl

  constructor(
    private router: Router,
    private service: TecnicoService) {
    this.tecnico = {
      id: '',
      nome: '',
      cpf: '',
      telefone: ''
    }
    this.nome = new FormControl('', [Validators.minLength(5)])
    this.cpf = new FormControl('', [Validators.minLength(11)])
    this.telefone = new FormControl('', [Validators.minLength(11)])
  }

  cancelaCadastro() {
    this.router.navigate(['/tecnicos'])
  }

  create() {
    this.service.create(this.tecnico).subscribe((response) => {
      this.router.navigate(['/tecnicos'])
      this.service.message('Técnico criado com sucesso!')
    }, (httpError) => {
      if (httpError.error.error.match('já cadastrado'))
        this.service.message(httpError.error.error)
      else if (httpError.error.listadeErros[0].messagemErro.match('(CPF)'))
        this.service.message('CPF inválido!')
    });
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
