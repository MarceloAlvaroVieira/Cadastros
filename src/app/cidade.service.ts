import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './cidade';
import { Estado } from './estado';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  estado!: Observable<Estado[]>

  private baseURL = "http://localhost:8080/cidade/list-cidades";

  constructor(private httpClient: HttpClient) { }

  getLista_De_Cidades(): Observable<Cidade[]>{
    return this.httpClient.get<Cidade[]>(`${this.baseURL}`);
  }

  cadastrarCidade(cidade: Cidade): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cidade);
  }

  get_Cidade_By_Id(id: number): Observable<Cidade>{
    return this.httpClient.get<Cidade>(`${this.baseURL}/${id}`)
  }

  update_Cidade(id: number, cidade: Cidade): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cidade)
  }

  apagarCidade(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
