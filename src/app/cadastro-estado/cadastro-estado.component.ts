import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadoService } from '../estado.service';
import { Estado } from '../estado';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-estado',
  templateUrl: './cadastro-estado.component.html',
  styleUrls: ['./cadastro-estado.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CadastroEstadoComponent implements OnInit {

  estado: Estado = new Estado();

  formulario!: FormGroup;

  b: boolean = false;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder, private estadoService: EstadoService, private router: Router) { }

  ngOnInit(): void {
    this.valida_Form();
  }

  valida_Form() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      sigla: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    });
  }

  get nome(){
    return (this.formulario.get('nome')?.dirty && this.formulario.get('nome')?.invalid);
  }
  
  get sigla(){
    return (this.formulario.get('sigla')?.dirty && this.formulario.get('sigla')?.invalid);
  }

  salvarEstado() {
    this.estadoService.cadastrarEstado(this.formulario.value).subscribe(data => {
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

  irParaListaDeEstado() {
    this.router.navigate(['/estados']);
  }

  onSubmit() {
    this.messageService.clear();
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'info', summary: 'Salvar?', detail: 'Deseja confirmar o cadastro?' });
  }

  onReject() {
    this.messageService.clear();
  }

  onConfirm() {
    this.salvarEstado();
  }

  voltar(){
    this.irParaListaDeEstado();
  }
}
