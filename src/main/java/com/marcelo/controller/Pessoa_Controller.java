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

import com.marcelo.dto.PessoaDTO;
import com.marcelo.exception.ResourceNotFoundException;
import com.marcelo.model.Pessoa;
import com.marcelo.repository.Pessoa_Repository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pessoas/v1/")
public class Pessoa_Controller {

	@Autowired
	private Pessoa_Repository repository;
	
		
	/* Cadastro de Pessoas*/
	@PostMapping("/pessoas")
	public ResponseEntity<PessoaDTO> cadastrar_Pessoas(@RequestBody Pessoa pessoa) {
		
		Pessoa pessoaCadastro = repository.save(pessoa);
		
		return ResponseEntity.ok().body(new PessoaDTO(pessoaCadastro));
	}
	
	
	/*Lista de todas as Pessoas*/
	@GetMapping("/pessoas")
	public ResponseEntity<List<PessoaDTO>> getAll(){
		
		List<Pessoa> pessoas = repository.findAll();
		List<PessoaDTO> listPessoasDTO = new ArrayList<PessoaDTO>();
		
		pessoas.forEach(pessoa ->{
			listPessoasDTO.add(new PessoaDTO(pessoa));
		});
		
		return ResponseEntity.ok().body(listPessoasDTO);
	}	
	
	
	/* Encontrando Pessoa pelo Id*/
	@GetMapping("/pessoas/{id}")
	public ResponseEntity<PessoaDTO> pesquisar_Por_Id(@PathVariable Long id) {
		Pessoa pessoa = repository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Pessoa com id " + id + "não encontrada"));
		
		return ResponseEntity.ok().body(new PessoaDTO(pessoa));
	}
	
	
	/*Update de pessoa */
	@PutMapping("pessoas/{id}")
	public ResponseEntity<PessoaDTO> update_Pessoa(@PathVariable Long id, @RequestBody Pessoa pessoa){
		Pessoa updatePessoa = repository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Pessoa com id " + id + "não encontrada"));
		
		updatePessoa.setNome(pessoa.getNome());
		updatePessoa.setSobrenome(pessoa.getSobrenome());
		updatePessoa.setEmail(pessoa.getEmail());
		updatePessoa.setCidade(pessoa.getCidade());		
		
		Pessoa update = repository.save(updatePessoa);
		
		return ResponseEntity.ok().body(new PessoaDTO(update));
	}
	
	
	/*Apagando Pessoa*/
	@DeleteMapping("/pessoas/{id}")
	public ResponseEntity<Map<String, Boolean>> deletarPessoa(@PathVariable Long id){
		
		Pessoa pessoa = repository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Pessoa com id " + id + " não encontrada"));
		
		repository.delete(pessoa);
		
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
