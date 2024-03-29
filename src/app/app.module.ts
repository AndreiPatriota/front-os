import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnicos/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './views/components/tecnicos/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnicos/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnicos/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './views/components/clientes/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/clientes/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/clientes/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/clientes/cliente-delete/cliente-delete.component';
import { OrdemReadComponent } from './views/components/ordens/ordem-read/ordem-read.component';
import { OrdemCreateComponent } from './views/components/ordens/ordem-create/ordem-create.component';
import { OrdemUpdateComponent } from './views/components/ordens/ordem-update/ordem-update.component';
import { OrdemViewComponent } from './views/components/ordens/ordem-view/ordem-view.component';
import { OrdemClosedComponent } from './views/components/ordens/ordem-closed/ordem-closed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TecnicoReadComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    OrdemReadComponent,
    OrdemCreateComponent,
    OrdemUpdateComponent,
    OrdemViewComponent,
    OrdemClosedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
