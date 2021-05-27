import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { Cidade } from '../cidade';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-de-cidade',
  templateUrl: './lista-de-cidade.component.html',
  styleUrls: ['./lista-de-cidade.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ListaDeCidadeComponent implements OnInit {

  id!: number;

  cidades!: Cidade[];

  constructor(private messageService: MessageService,private cidadeService: CidadeService, private router: Router) { }

  ngOnInit(): void {
    this.getCidades();
  }

  getCidades(){
    this.cidadeService.getLista_De_Cidades().subscribe(data => {
      this.cidades = data;
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar a lista de cidades'});
    });
  }

  adicionar(){
    this.router.navigate(['cadastrar-cidade']);
  }

  listaDePessoas(){
    this.router.navigate(['pessoas']);
  }

  listaDeEstados(){
    this.router.navigate(['estados']);
  }

  updateCidade(id: number){
    this.router.navigate(['/atualizar-cidade/', id]);
  }

  apagarCidade(){
    this.cidadeService.apagarCidade(this.id).subscribe(data => {
      console.log(data);

      this.getCidades();

      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'success', summary: '', detail: 'Cidade excluida com sucesso'});
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Falha ao excluir cidade'});
    });
  }

  delete(id: number){

    this.id = id;
    this.messageService.clear();
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'error', summary: 'Apagar?', detail: 'Não será possível recuperar os dados após a exclusão'});
  }

  onConfirm(){
    this.apagarCidade();
  }

  onReject(){
    this.messageService.clear();
  }
}
