package com.marcelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marcelo.model.Pessoa;

@Repository
public interface Pessoa_Repository extends JpaRepository<Pessoa, Long>{

}
