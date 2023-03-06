import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico: Tecnico

  constructor(
    private router: Router,
    private service: TecnicoService,
    private route: ActivatedRoute
  ) {
    this.tecnico = {
      id: '',
      nome: '',
      cpf: '',
      telefone: ''
    }

  }

  ngOnInit() {
    let idTecnico = Number(this.route.snapshot.paramMap.get('id'))
    this.service.findById(idTecnico).subscribe((inReposnse) => {
      this.tecnico = inReposnse
    })
  }

  cancelaCadastro() {
    this.router.navigate(['/tecnicos'])
  }

  delete() {
    this.service.delete(this.tecnico).subscribe((inResponse) => {
      this.router.navigate(['/tecnicos'])
      this.service.message('Técnico deleto com sucesso!')
    }, inHttpErro => {
      if (inHttpErro.error.error.match('ordens de serviço')) {
        this.service.message('Técnico possui ordens de serviço pendentes.')
      } else {
        console.log(inHttpErro)
      }

    });
  }
}
