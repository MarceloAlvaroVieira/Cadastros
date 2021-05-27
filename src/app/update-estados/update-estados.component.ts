import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from '../estado.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-estados',
  templateUrl: './update-estados.component.html',
  styleUrls: ['./update-estados.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UpdateEstadosComponent implements OnInit {

  formulario!: FormGroup;

  id!: number;
  
  constructor(private messageService: MessageService, private formBuilder: FormBuilder,private estadoService: EstadoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadEstado();
    this.valida_Form();
  }

  loadEstado(){
    this.id = this.activatedRoute.snapshot.params['id'];

    this.estadoService.getEstado_By_Id(this.id).subscribe(data => {
      this.formulario.get('nome')?.setValue(data.nome);
      this.formulario.get('sigla')?.setValue(data.sigla);
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados'});
    });
  }

  valida_Form(){
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      sigla: [null, [Validators.required, Validators.minLength(2),Validators.maxLength(2)]]
    })
  }

  get nome(){
    return (this.formulario.get('nome')?.dirty && this.formulario.get('nome')?.invalid);
  }

  get sigla(){
    return (this.formulario.get('sigla')?.dirty && this.formulario.get('sigla')?.invalid);
  }

  onSubmit(){
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'info', summary: 'Salvar?', detail: 'Deseja salvar as alterações?' });
  }

  irParaListaDeEstados(){
    this.router.navigate(['/estados']);
  }

  voltar(){
    this.irParaListaDeEstados();
  }

  onConfirm(){
    this.estadoService.updateEstado(this.id, this.formulario.value).subscribe(data => {
      this.irParaListaDeEstados();
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar os dados'})
    });
  }

  onReject(){
    this.messageService.clear();
  }
}
