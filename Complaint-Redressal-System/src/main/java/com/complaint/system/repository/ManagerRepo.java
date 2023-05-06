package com.complaint.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.complaint.system.entity.Manager;

@Repository
public interface ManagerRepo extends JpaRepository<Manager, Integer>{
	@Query("from Manager m where m.email=:email and m.password=:password")
	public Manager findByEmailPass(String email, String password);
}
