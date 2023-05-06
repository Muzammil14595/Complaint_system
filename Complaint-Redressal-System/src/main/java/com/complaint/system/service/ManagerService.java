package com.complaint.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaint.system.entity.Manager;
import com.complaint.system.repository.ManagerRepo;

@Service
public class ManagerService {

	@Autowired
	private ManagerRepo repo;
	
	public Manager register(Manager manager) {
		return repo.save(manager);
	}

	
	public Manager login(Manager manager) {
		// TODO Auto-generated method stub
		return repo.findByEmailPass(manager.getEmail(), manager.getPassword());
	}


	public List<Manager> getAllManagers() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}


	public void updManager(int id, Manager manager) {
		// TODO Auto-generated method stub
		if(repo.findById(id).isPresent()){
			Manager oldManager = repo.findById(id).get();
			oldManager.setName(manager.getName());
			oldManager.setEmail(manager.getEmail());
			oldManager.setPassword(manager.getPassword());
			oldManager.setPhoneNumber(manager.getPhoneNumber());
			repo.save(oldManager);
		}
	}


	public void delManager(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}
}
