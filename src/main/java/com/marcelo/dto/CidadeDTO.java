package com.marcelo.dto;

import com.marcelo.model.Cidade;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CidadeDTO {

	private Long id;

	private String cep;

	private String nome;

	private EstadoDTO estado;
	
	public CidadeDTO(Cidade cidade) {
		this.id = cidade.getId();
		this.nome = cidade.getNome();
		this.cep = cidade.getCep();
		this.estado = new EstadoDTO(cidade.getEstado());
	}
}
