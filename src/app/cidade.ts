import { Estado } from "./estado";

export class Cidade{
    id!: number;
    nome!: string;
    cep!: string;
    estado!: Estado; 
}