import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-de-pessoas',
  templateUrl: './lista-de-pessoas.component.html',
  styleUrls: ['./lista-de-pessoas.component.css'],
  providers: [MessageService]
})
export class ListaDePessoasComponent implements OnInit {

  id!: number;

  pessoas!: Pessoa[];

  constructor(private messageService: MessageService, private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas(){
    this.pessoaService.getLista_De_Pessoas().subscribe(data => {    
        this.pessoas = data;
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar a lista de pessoas'});
    });
  }

  updatePessoa(id: number){
    this.router.navigate(['atualizar-pessoa', id]);
  }

  adicionar(){
    this.router.navigate(['cadastrar-pessoa']);
  }

  listaDeCidades(){
    this.router.navigate(['cidades']);
  }

  listaDeEstados(){
    this.router.navigate(['estados']);
  }

  apagarPessoa(){
    this.pessoaService.apagarPessoa(this.id).subscribe(data =>{
      console.log(data);

      this.getPessoas();
      
      this.messageService.clear()
      this.messageService.add({key: 'exibir', sticky: true, severity: 'success', summary: '', detail: 'Pessoa excluida com sucesso' });
    },
    error =>{
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Falha ao excluir cidade'});
    });
  }

  delete(id: number){

    this.id = id;

    this.messageService.clear();
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'error', summary: 'Apagar?', detail: 'Não será pssível recuperar os dados após exclusão!' });
  }

  onConfirm(){
    this.apagarPessoa();
  }

  onReject(){
    this.messageService.clear();
  }
}
