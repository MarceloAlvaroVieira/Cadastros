import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { EstadoService } from '../estado.service';
import { Estado } from '../estado';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css'],
  providers: [MessageService]
})
export class CadastroCidadeComponent implements OnInit {

  formulario!: FormGroup;

  // cidade: Cidade = new Cidade();

  estados: Estado[] = [];

  constructor(private messageService: MessageService, private formBuilder: FormBuilder,private cidadeService: CidadeService, private router: Router, private estadoService: EstadoService) { }

  ngOnInit(): void {
    this.loadEstados();
    this.valida_Form();
  }

  valida_Form(){
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      cep: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      estado: [null, Validators.required]
    });
  }

  get nome(){
    return (this.formulario.get('nome')?.dirty && this.formulario.get('nome')?.invalid);
  }

  get cep(){
    return (this.formulario.get('cep')?.dirty && this.formulario.get('cep')?.invalid);
  }

  get estado(){
    return (this.formulario.get('estado')?.touched && this.formulario.get('estado')?.invalid);
  }

  loadEstados(){
    this.estadoService.getLista_De_Estados().subscribe(data => {
      this.estados = data;
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados'});
    });
  }

  salvarCidade(){
    this.cidadeService.cadastrarCidade(this.formulario.value).subscribe(data => {
      console.log(data);
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'success', summary: '', detail: 'Cadastro bem sucedido' });
      this.formulario.reset();
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível realizar este cadastro'});
    });
  }

  irParaListaDeCidades(){
    this.router.navigate(['/cidades']);
  }

  onSubmit(){
    this.messageService.clear();
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'info', summary: 'Salvar?', detail: 'Deseja confirmar o cadastro?' });
  }

  voltar(){
    this.irParaListaDeCidades();
  }

  onReject(){
    this.messageService.clear();
  }

  onConfirm(){
    this.salvarCidade();
  }
}