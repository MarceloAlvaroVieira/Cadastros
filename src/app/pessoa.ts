import { Cidade } from "./cidade";

export class Pessoa {
    id!: number;
    nome!: string;
    sobrenome!: string;
    email!: string;
    cidade!: Cidade;
}