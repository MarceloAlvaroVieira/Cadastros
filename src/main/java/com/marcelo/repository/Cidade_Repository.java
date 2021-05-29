package com.marcelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marcelo.model.Cidade;

@Repository
public interface Cidade_Repository extends JpaRepository<Cidade, Long>{

}
