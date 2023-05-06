package com.complaint.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaint.system.entity.User;
import com.complaint.system.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
	
	public User register(User user) {
		return userRepo.save(user);
	}

	
	public User login(User user) {
		// TODO Auto-generated method stub
		return userRepo.findByEmailPass(user.getEmail(), user.getPassword());
	}


	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}
}
