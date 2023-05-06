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

import com.complaint.system.entity.Engineer;
import com.complaint.system.service.EngineerService;

@RestController
@RequestMapping("/api/engineer")
@CrossOrigin("http://localhost:4200/")
public class EngineerController {
	@Autowired
	private EngineerService service;
	
	@PostMapping("/register")
	public ResponseEntity<Object> register(@RequestBody Engineer engineer){
		Engineer createdUser = service.register(engineer);
		if(createdUser != null) {
			return new ResponseEntity<Object> (createdUser, HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	} 
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody Engineer engineer){
		//calling method login to save object of Customer and taking response in variable named 'created'
		Engineer created= service.login(engineer);
		if(created!=null)
			return new ResponseEntity<Object>(created,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Not Found",
					HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("allEngineers")
	public List<Engineer> getAllEngineers(){
		return service.getAllEngineers();
	}
	
	@PutMapping("/{id}")
	public void updEngineer(@PathVariable int id, @RequestBody Engineer engineer) {
		service.updEngineer(id, engineer);		
	}
	
	@DeleteMapping("/{id}")
	public void delEngineer(@PathVariable int id) {
		service.delEngineer(id);
	}
}
