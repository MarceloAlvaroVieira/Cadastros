package com.marcelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marcelo.model.Estado;

@Repository
public interface Estado_Repository extends JpaRepository<Estado, Long>{
	
}
