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

import com.marcelo.dto.CidadeDTO;
import com.marcelo.exception.ResourceNotFoundException;
import com.marcelo.model.Cidade;
import com.marcelo.repository.Cidade_Repository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cidade")
public class Cidade_Controller {
	
	@Autowired
	private Cidade_Repository cidade_repository;

	
	/*cadastro de cidade*/
	@PostMapping("/list-cidades")
	public ResponseEntity<CidadeDTO> salvar_Cidade(@RequestBody Cidade cidade){
		
		Cidade cidadeCadastro = cidade_repository.save(cidade);
		
		return ResponseEntity.ok().body(new CidadeDTO(cidadeCadastro));
	}
	
	
	/*listar todas as cidades*/
	@GetMapping("/list-cidades")
	public ResponseEntity<List<CidadeDTO>> getCidades(){
		
		List<Cidade> cidades = cidade_repository.findAll();
		List<CidadeDTO> listaCidadesDTO = new ArrayList<CidadeDTO>();
		
		cidades.forEach(cidade ->{
			listaCidadesDTO.add(new CidadeDTO(cidade));
		});
		
		return ResponseEntity.ok().body(listaCidadesDTO);
	}
	
	
	/*buscar cidade por id*/
	@GetMapping("/list-cidades/{id}")
	public ResponseEntity<CidadeDTO> buscarPorId(@PathVariable Long id) {
		
		Cidade cidade = cidade_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cidade com id "+ id +" não encontrada"));
		
		return ResponseEntity.ok().body(new CidadeDTO(cidade));
	}
	
	
	/*Atualizar cidade*/
	@PutMapping("/list-cidades/{id}")
	public ResponseEntity<CidadeDTO> updateCidade(@PathVariable Long id, @RequestBody Cidade cidade){
		Cidade updateCidade = cidade_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cidade não encontrada"));
		
		updateCidade.setCep(cidade.getCep());
		updateCidade.setNome(cidade.getNome());
		updateCidade.setEstado(cidade.getEstado());
		
		Cidade update = cidade_repository.save(updateCidade);
		
		return ResponseEntity.ok().body(new CidadeDTO(update));
	}
	
	/*Apagar cidade*/
	@DeleteMapping("/list-cidades/{id}")
	public ResponseEntity<Map<String, Boolean>> deletarCidade(@PathVariable Long id){
		
		Cidade cidade = cidade_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cidade não encontrada"));
		
		cidade_repository.delete(cidade);
		
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
