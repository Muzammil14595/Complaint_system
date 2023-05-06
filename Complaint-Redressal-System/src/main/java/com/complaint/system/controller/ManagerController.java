package com.complaint.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.complaint.system.entity.Manager;
import com.complaint.system.service.ManagerService;


@RestController
@RequestMapping("/api/manager")
@CrossOrigin("http://localhost:4200/")
public class ManagerController {
	@Autowired
	private ManagerService service;
	
	@PostMapping("/register")
	public ResponseEntity<Object> register(@RequestBody Manager manager){
		Manager createdUser = service.register(manager);
		if(createdUser != null) {
			return new ResponseEntity<Object> (createdUser, HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	} 
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody Manager manager){
		//calling method login to save object of Customer and taking response in variable named 'created'
		Manager created= service.login(manager);
		if(created!=null)
			return new ResponseEntity<Object>(created,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Not Found",
					HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("allManagers")
	public List<Manager> getAllManagers(){
		return service.getAllManagers();
	}
	
	@PutMapping("/{id}")
	public void updManager(@PathVariable int id, @RequestBody Manager manager) {
		service.updManager(id, manager);		
	}
	
	@DeleteMapping("/{id}")
	public void delManager(@PathVariable int id) {
		service.delManager(id);
	}
}
