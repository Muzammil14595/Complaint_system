package com.complaint.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaint.system.entity.User;
import com.complaint.system.service.UserService;



@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:4200/")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<Object> register(@RequestBody User user){
		User createdUser = userService.register(user);
		if(createdUser != null) {
			return new ResponseEntity<Object> (createdUser, HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	} 
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody User user){
		//calling method login to save object of Customer and taking response in variable named 'created'
		User created= userService.login(user);
		if(created!=null)
			return new ResponseEntity<Object>(created,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Not Found",
					HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("allUsers")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
}
