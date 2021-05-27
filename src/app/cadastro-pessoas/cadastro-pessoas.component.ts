import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { Cidade } from '../cidade';
import { PessoaService } from '../pessoa.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.css'],
  providers: [MessageService, ConfirmationService]  
})
export class CadastroPessoasComponent implements OnInit {

  formulario!: FormGroup;

  cidades: Cidade[] = [];

  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private pessoaservice: PessoaService,private cidadeService: CidadeService, private router: Router) { }

  ngOnInit(): void { 
    this.loadCidades();
    this.valida_Form();
   }

   valida_Form(){
    this.formulario = this.formBuilder.group({
      nome: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      sobrenome: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: [null, [ Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]],
      cidade: [null, Validators.required]
    });
   }

   get nome(){
    return (this.formulario.get('nome')?.dirty && this.formulario.get('nome')?.invalid);
  }

  get sobrenome(){
    return (this.formulario.get('sobrenome')?.dirty && this.formulario.get('sobrenome')?.invalid);
  }

  get email(){
    return (this.formulario.get('email')?.dirty && this.formulario.get('email')?.invalid);
  }

  get cidade(){
    return (this.formulario.get('cidade')?.touched && this.formulario.get('cidade')?.invalid);
  }

   loadCidades(){
    this.cidadeService.getLista_De_Cidades().subscribe(data => {
      this.cidades = data;
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados'});
    });
   }

  salvarPessoa(){
    this.pessoaservice.cadastrarPessoa(this.formulario.value).subscribe(data =>{
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

  irParaListaDePessoas(){
    this.router.navigate(['/pessoas']);
  }

  onSubmit() {
    this.messageService.clear();
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'info', summary: 'Salvar?', detail: 'Deseja confirmar o cadastro?' });
  }

  onReject() {
    this.messageService.clear();
  }

  onConfirm() {
    this.salvarPessoa();
  }

  voltar(){
    this.irParaListaDePessoas();
  }

}
