import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from 'src/app/models/ordem';
import { OrdensService } from 'src/app/services/ordens.service';

@Component({
  selector: 'app-ordem-view',
  templateUrl: './ordem-view.component.html',
  styleUrls: ['./ordem-view.component.css'],
})
export class OrdemViewComponent implements OnInit {
  ordem: Ordem = {
    idTecnico: '',
    idCliente: '',
    observacoes: '',
    prioridade: '',
    status: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: OrdensService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ordem.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById() {
    this.service.findById(this.ordem.id).subscribe((inResposta) => {
      this.ordem = inResposta;
    });
  }

  volta() {
    this.router.navigate(['ordens']);
  }
}
