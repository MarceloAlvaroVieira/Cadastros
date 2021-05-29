import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../estado.service';
import { Estado } from '../estado';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-de-estados',
  templateUrl: './lista-de-estados.component.html',
  styleUrls: ['./lista-de-estados.component.css'],
  providers: [MessageService]
})
export class ListaDeEstadosComponent implements OnInit {

  id!: number;

  estados!: Estado[];

  constructor(private messageService: MessageService, private estadoService: EstadoService, private router: Router) { }

  ngOnInit(): void {
    this.getEstados();
  }

  getEstados() {
    this.estadoService.getLista_De_Estados().subscribe(data => {
      this.estados = data;
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar a lista de estados'});
    });
  }

  Adicionar() {
    this.router.navigate(['cadastrar-estado']);
  }

  listaDePessoas() {
    this.router.navigate(['pessoas']);
  }

  listaDeCidades() {
    this.router.navigate(['cidades']);
  }

  updateEstado(id: number) {
    this.router.navigate(['atualizar-estado/', id]);
  }

  apagarEstado() {
    this.estadoService.apagarEstado(this.id).subscribe(data => {
      console.log(data);

      this.getEstados();

      this.messageService.clear();
      this.messageService.add({ key: 'exibir', sticky: true, severity: 'success', summary: '', detail: 'Estado excluido com sucesso' });
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Falha ao excluir estado'});
    });
  }

  delete(id: number) {

    this.id = id;

    this.messageService.clear();
    this.messageService.add({ key: 'confirmar', sticky: true, severity: 'error', summary: 'Apagar?', detail: 'Não será possível recuperar os dados após a exclusão' });
  };

  onConfirm(){
    this.apagarEstado();
  }

  onReject() {
    this.messageService.clear();
  }
}
