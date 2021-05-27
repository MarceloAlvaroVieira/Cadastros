import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { EstadoService } from '../estado.service';
import { Estado } from '../estado';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-cidades',
  templateUrl: './update-cidades.component.html',
  styleUrls: ['./update-cidades.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UpdateCidadesComponent implements OnInit {

  formulario!: FormGroup;

  estados: Estado[] = [];

  id!: number;

  constructor(private messageService: MessageService, private formBuilder: FormBuilder,private cidadeService: CidadeService, private estadoService: EstadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadEstados();
    this.loadCidade();
    this.valida_Form();
  }

  valida_Form(){
    this.formulario = this.formBuilder.group({
      nome: [null,[ Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      cep: [null, [ Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
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
    return (this.formulario.get('estado')?.dirty && this.formulario.get('estado')?.invalid);
  }
  loadEstados(){
    this.estadoService.getLista_De_Estados().subscribe(data =>{
      this.estados = data;
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados'});
    });
  }
  
  loadCidade(){
    this.id = this.route.snapshot.params['id'];

    this.cidadeService.get_Cidade_By_Id(this.id).subscribe(data =>{
      // this.cidade = data;
      this.formulario.get('nome')?.setValue(data.nome);
      this.formulario.get('cep')?.setValue(data.cep);
      this.formulario.get('estado')?.setValue(data.estado);
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados'});
    });
  }

  irParaListaDeCidades(){
    this.router.navigate(['/cidades']);
  }

  onSubmit(){
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'info', summary: 'Salvar?', detail: 'Deseja salvar as alterações?' });
  }

  voltar(){
    this.irParaListaDeCidades();
  }

  onConfirm(){
    this.cidadeService.update_Cidade(this.id, this.formulario.value).subscribe(data => {
      this.irParaListaDeCidades();
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar os dados'});
    });
  }

  onReject(){
    this.messageService.clear();
  }
}
