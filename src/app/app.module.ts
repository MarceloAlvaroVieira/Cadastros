import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { UpdatePessoasComponent } from './update-pessoas/update-pessoas.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table' 
import { PanelModule } from 'primeng/panel'
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';

import { ButtonModule } from 'primeng/button';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { CadastroEstadoComponent } from './cadastro-estado/cadastro-estado.component';
import { ListaDeEstadosComponent } from './lista-de-estados/lista-de-estados.component';
import { ListaDeCidadeComponent } from './lista-de-cidade/lista-de-cidade.component';
import { UpdateCidadesComponent } from './update-cidades/update-cidades.component';
import { UpdateEstadosComponent } from './update-estados/update-estados.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    ListaDePessoasComponent,
    CadastroPessoasComponent,
    UpdatePessoasComponent,
    CadastroCidadeComponent,
    CadastroEstadoComponent,
    ListaDeEstadosComponent,
    ListaDeCidadeComponent,
    UpdateCidadesComponent,
    UpdateEstadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    ReactiveFormsModule,
    InputMaskModule,
    TableModule,
    PanelModule,
    ToolbarModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
