import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseURL = "http://localhost:8080/pessoas/v1/pessoas";

  constructor(private httpClient: HttpClient) { }

  getLista_De_Pessoas(): Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(`${this.baseURL}`);
  }

  cadastrarPessoa(pessoa: Pessoa): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, pessoa);
  }

  getPessoa_Por_Id(id: number): Observable<Pessoa>{
    return this.httpClient.get<Pessoa>(`${this.baseURL}/${id}`);
  }

  updatePessoa(id: number, pessoa: Pessoa): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, pessoa);
  }

  apagarPessoa(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
