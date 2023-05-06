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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaint.system.entity.AssignedComplaint;
import com.complaint.system.service.AssignedComplaintService;

@RestController
@RequestMapping("/api/assignedComplaint")
@CrossOrigin("http://localhost:4200/")
public class AssignedComplaintController {

	@Autowired
	private AssignedComplaintService service;
	
	@PostMapping("")
	public ResponseEntity<Object> addComplaint(@RequestBody AssignedComplaint assignedComplaint){
		AssignedComplaint com1 = service.addComplaint(assignedComplaint);
		if(com1 != null) {
			return new ResponseEntity<Object> (com1,HttpStatus.CREATED);
		}else{
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("")
	public List<AssignedComplaint> getAllAssignedComplaints(){
		return service.getAllAssignedComplaints();
	}

	
	@DeleteMapping("/{id}")
	public void delComplaint(@PathVariable int id) {
		service.delComplaint(id);
	}
	
	@GetMapping("/getAllCompEngineerA")
	public List<AssignedComplaint> getAllCompEngineerA(){
		return service.getAllCompEngineerA();
	}
	
	@GetMapping("/getAllCompEngineerB")
	public List<AssignedComplaint> getAllCompEngineerB(){
		return service.getAllCompEngineerB();
	}
	
	@GetMapping("/getAllCompEngineerC")
	public List<AssignedComplaint> getAllCompEngineerC(){
		return service.getAllCompEngineerC();
	}
	
	@GetMapping("/getAllCompEngineerD")
	public List<AssignedComplaint> getAllCompEngineerD(){
		return service.getAllCompEngineerD();
	}
	
	@GetMapping("/getAllCompEngineerE")
	public List<AssignedComplaint> getAllCompEngineerE(){
		return service.getAllCompEngineerE();
	}
	
	@GetMapping("/getAllCompEngineerF")
	public List<AssignedComplaint> getAllCompEngineerF(){
		return service.getAllCompEngineerF();
	}
	
	@GetMapping("/getAllCompEngineerG")
	public List<AssignedComplaint> getAllCompEngineerG(){
		return service.getAllCompEngineerG();
	}
	
	@GetMapping("/getAllCompEngineerH")
	public List<AssignedComplaint> getAllCompEngineerH(){
		return service.getAllCompEngineerH();
	}
	
	@GetMapping("/getAllCompEngineerI")
	public List<AssignedComplaint> getAllCompEngineerI(){
		return service.getAllCompEngineerI();
	}
	
	@GetMapping("/getAllCompEngineerJ")
	public List<AssignedComplaint> getAllCompEngineerJ(){
		return service.getAllCompEngineerJ();
	}
}
