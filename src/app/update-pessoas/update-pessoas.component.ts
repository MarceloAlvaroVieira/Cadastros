import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { Cidade } from '../cidade';
import { PessoaService } from '../pessoa.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-pessoas',
  templateUrl: './update-pessoas.component.html',
  styleUrls: ['./update-pessoas.component.css'],
  providers: [MessageService]
})
export class UpdatePessoasComponent implements OnInit {

  formulario!: FormGroup;

  cidades: Cidade[] = [];

  id!: number;

  constructor(private messageService: MessageService, private formBuilder: FormBuilder,private pessoaService: PessoaService, private cidadeService: CidadeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.loadCidades();
      this.loadPessoa();
      this.valida_Form();
  }

  valida_Form(){
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      sobrenome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]],
      cidade: [null, Validators.required]
    })
  }

  loadCidades(){
    this.cidadeService.getLista_De_Cidades().subscribe(data =>{
      this.cidades = data;
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados'});
    });
  }

  loadPessoa(){
    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoa_Por_Id(this.id).subscribe(data => {
      this.formulario.get('nome')?.setValue(data.nome);
      this.formulario.get('sobrenome')?.setValue(data.sobrenome);
      this.formulario.get('email')?.setValue(data.email);
      this.formulario.get('cidade')?.setValue(data.cidade);
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados'});
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
    return (this.formulario.get('cidade')?.dirty && this.formulario.get('cidade')?.invalid);
  }

  onSubmit(){
    this.messageService.add({key: 'confirmar', sticky: true, severity: 'info', summary: 'Salvar?', detail: 'Deseja salvar as alterações?' });
  }

  voltar(){
    this.router.navigate(['/pessoas']);
  }

  onConfirm(){
    this.pessoaService.updatePessoa(this.id, this.formulario.value).subscribe(data => {
      this.id = 0;
      this.formulario.reset();
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'success', summary: 'Pronto!', detail: 'Dados atualizados com sucesso'});
    },
    error => {
      this.messageService.clear();
      this.messageService.add({key: 'exibir', sticky: true, severity: 'error', summary: 'Erro!', detail: 'Não foi possível atualizar os dados'});
    });
  }

  onReject(){
    this.messageService.clear();
  }
}