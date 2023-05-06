package com.complaint.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.complaint.system.entity.Engineer;

@Repository
public interface EngineerRepo extends JpaRepository<Engineer, Integer>{
	@Query("from Engineer e where e.email=:email and e.password=:password")
	public Engineer findByEmailPass(String email, String password);
}
