package com.complaint.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaint.system.entity.Engineer;
import com.complaint.system.repository.EngineerRepo;

@Service
public class EngineerService {

	@Autowired
	private EngineerRepo repo;
	
	public Engineer register(Engineer engineer) {
		return repo.save(engineer);
	}

	
	public Engineer login(Engineer engineer) {
		// TODO Auto-generated method stub
		return repo.findByEmailPass(engineer.getEmail(), engineer.getPassword());
	}


	public List<Engineer> getAllEngineers() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
	
	public void updEngineer(int id, Engineer engineer) {
		// TODO Auto-generated method stub
		if(repo.findById(id).isPresent()){
			Engineer oldEngineer = repo.findById(id).get();
			oldEngineer.setName(engineer.getName());
			oldEngineer.setEmail(engineer.getEmail());
			oldEngineer.setPassword(engineer.getPassword());
			oldEngineer.setPhoneNumber(engineer.getPhoneNumber());
			repo.save(oldEngineer);
		}
	}


	public void delEngineer(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}
}
