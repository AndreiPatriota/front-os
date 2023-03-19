import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnicos/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './views/components/tecnicos/tecnico-create/tecnico-create.component';
import { compileDeclareFactoryFunction } from '@angular/compiler';
import { TecnicoUpdateComponent } from './views/components/tecnicos/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnicos/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './views/components/clientes/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/clientes/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/clientes/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/clientes/cliente-delete/cliente-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tecnicos',
    component: TecnicoReadComponent
  },
  {
    path: 'tecnicos/create',
    component: TecnicoCreateComponent
  },
  {
    path: 'tecnicos/update/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'tecnicos/delete/:id',
    component: TecnicoDeleteComponent
  },
  {
    path: 'clientes',
    component: ClienteReadComponent
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
