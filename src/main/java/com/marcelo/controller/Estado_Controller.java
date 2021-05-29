package com.marcelo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marcelo.dto.EstadoDTO;
import com.marcelo.exception.ResourceNotFoundException;
import com.marcelo.model.Estado;
import com.marcelo.repository.Estado_Repository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/estado")
public class Estado_Controller {

	@Autowired
	private Estado_Repository estado_repository;

	/*Cadastro de Estados*/
	@PostMapping("/list-estados")
	public ResponseEntity<EstadoDTO> salvarEstado(@RequestBody Estado estado) {
		
		Estado estadoCadastro = estado_repository.save(estado);
		
		return ResponseEntity.ok().body(new EstadoDTO(estadoCadastro));
	}

	/*Listando Estados*/
	@GetMapping("/list-estados")
	public ResponseEntity <List<EstadoDTO>> getEstados() {
		
		List<Estado> estados = estado_repository.findAll();
		List<EstadoDTO> listaEstadosDTO = new ArrayList<EstadoDTO>();
		
		estados.forEach(estado ->{
			listaEstadosDTO.add(new EstadoDTO(estado));
		});
		
		return ResponseEntity.ok().body(listaEstadosDTO);
	}
	
	
	/*Buscando Esatdos por id*/
	@GetMapping("/list-estados/{id}")
	public ResponseEntity<EstadoDTO> get_By_Id(@PathVariable Long id){
		
		Estado estado = estado_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estado com id "+ id +" encontrado"));
		
		return ResponseEntity.ok().body(new EstadoDTO(estado));
	}
	
	
	/*atualizando Estado*/
	@PutMapping("/list-estados/{id}")
	public ResponseEntity<EstadoDTO> udpateEstado(@PathVariable Long id, @RequestBody Estado estado){
		
		Estado estadoUpdate = estado_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estado não encontrado")); 
		
		estadoUpdate.setNome(estado.getNome());
		estadoUpdate.setSigla(estado.getSigla());
		
		Estado update = estado_repository.save(estadoUpdate);
				
		return ResponseEntity.ok().body(new EstadoDTO(update));
		
	}
	
	
	/*Apagando Estado*/
	@DeleteMapping("/list-estados/{id}")
	public ResponseEntity<Map<String, Boolean>> deletarEstado(@PathVariable Long id){
		
		Estado estado = estado_repository.findById(id)
			.orElseThrow(()-> new ResourceNotFoundException("Estado com id " + id + "não encontrado"));
		
		
		estado_repository.delete(estado);
		
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
		
	}
}