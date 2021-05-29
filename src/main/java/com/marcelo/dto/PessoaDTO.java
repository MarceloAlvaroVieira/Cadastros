package com.marcelo.dto;

import com.marcelo.model.Pessoa;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PessoaDTO {

	private Long id;
	
	private String nome;
	
	private String sobrenome;
	
	private String email;
	
	private CidadeDTO cidade;
	
	public PessoaDTO(Pessoa pessoa) {
		this.id = pessoa.getId();
		this.nome = pessoa.getNome();
		this.sobrenome = pessoa.getSobrenome();
		this.email = pessoa.getEmail();
		this.cidade = new CidadeDTO(pessoa.getCidade());
	}
}