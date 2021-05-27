import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { CadastroEstadoComponent } from './cadastro-estado/cadastro-estado.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { ListaDeCidadeComponent } from './lista-de-cidade/lista-de-cidade.component';
import { ListaDeEstadosComponent } from './lista-de-estados/lista-de-estados.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';
import { UpdateCidadesComponent } from './update-cidades/update-cidades.component';
import { UpdateEstadosComponent } from './update-estados/update-estados.component';
import { UpdatePessoasComponent } from './update-pessoas/update-pessoas.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'pessoas', pathMatch: 'full'},

  {path: 'pessoas', component: ListaDePessoasComponent},
  {path: 'cadastrar-pessoa', component: CadastroPessoasComponent},
  {path: 'atualizar-pessoa/:id', component: UpdatePessoasComponent},

  {path: 'cidades', component:ListaDeCidadeComponent},
  {path: 'cadastrar-cidade',component:CadastroCidadeComponent},
  {path: 'atualizar-cidade/:id',component: UpdateCidadesComponent},

  {path: 'estados', component:ListaDeEstadosComponent},
  {path: 'cadastrar-estado',component: CadastroEstadoComponent},
  {path: 'atualizar-estado/:id',component: UpdateEstadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
