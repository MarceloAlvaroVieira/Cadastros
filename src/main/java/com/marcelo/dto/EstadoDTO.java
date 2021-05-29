package com.marcelo.dto;

import com.marcelo.model.Estado;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EstadoDTO {
	
	private Long id;
	
	private String sigla;
	
	private String nome;
	
	public EstadoDTO(Estado estado) {
		this.id = estado.getId();
		this.nome = estado.getNome();
		this.sigla = estado.getSigla();
	}
}


