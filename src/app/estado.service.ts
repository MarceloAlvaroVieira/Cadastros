import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from './estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private baseURL = "http://localhost:8080/estado/list-estados";

  constructor(private httpClient: HttpClient) { }

  getLista_De_Estados(): Observable<Estado[]>{
    return this.httpClient.get<Estado[]>(`${this.baseURL}`);
  }

  cadastrarEstado(estado: Estado): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, estado);
  }

  getEstado_By_Id(id: number): Observable<Estado>{
    return this.httpClient.get<Estado>(`${this.baseURL}/${id}`);
  }

  updateEstado(id: number, estado: Estado): Observable<Object>{
    return this.httpClient.put<Estado>(`${this.baseURL}/${id}`, estado);
  }

  apagarEstado(id: number): Observable<Object>{
    return this.httpClient.delete<Estado>(`${this.baseURL}/${id}`);
  }
}
