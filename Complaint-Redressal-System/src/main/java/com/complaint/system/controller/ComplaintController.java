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

import com.complaint.system.entity.Complaint;
import com.complaint.system.service.ComplaintService;

@RestController
@RequestMapping("/api/complaint")
@CrossOrigin("http://localhost:4200/")
public class ComplaintController {

	@Autowired
	private ComplaintService complaintService;
	
	@PostMapping("")
	public ResponseEntity<Object> addComplaint(@RequestBody Complaint complaint){
		Complaint com1 = complaintService.addComplaint(complaint);
		if(com1 != null) {
			return new ResponseEntity<Object> (com1,HttpStatus.CREATED);
		}else{
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("")
	public List<Complaint> getAllComplaints(){
		return complaintService.getAllComplaints();
	}
	
	@GetMapping("/raised")
	public List<Complaint> getRaisedComplaints(){
		return complaintService.getAllRaisedComplaints();
	}
	
	@DeleteMapping("/{id}")
	public void delComplaint(@PathVariable int id) {
		complaintService.delComplaint(id);
	}
	
	@GetMapping("/getAllCompManagerA")
	public List<Complaint> getAllCompManagerA(){
		return complaintService.getAllCompManagerA();
	}
	
	@GetMapping("/getAllCompManagerB")
	public List<Complaint> getAllCompManagerB(){
		return complaintService.getAllCompManagerB();
	}
	
	@GetMapping("/getAllCompManagerC")
	public List<Complaint> getAllCompManagerC(){
		return complaintService.getAllCompManagerC();
	}

	@GetMapping("/getAllCompManagerD")
	public List<Complaint> getAllCompManagerD(){
		return complaintService.getAllCompManagerD();
	}
	
	@GetMapping("/getAllCompManagerE")
	public List<Complaint> getAllCompManagerE(){
		return complaintService.getAllCompManagerE();
	}
	
	@GetMapping("/getAllCompManagerF")
	public List<Complaint> getAllCompManagerF(){
		return complaintService.getAllCompManagerF();
	}
	
	@GetMapping("/getAllCompManagerG")
	public List<Complaint> getAllCompManagerG(){
		return complaintService.getAllCompManagerG();
	}
	
	@GetMapping("/getAllCompManagerH")
	public List<Complaint> getAllCompManagerH(){
		return complaintService.getAllCompManagerH();
	}
	
	@GetMapping("/getAllCompManagerI")
	public List<Complaint> getAllCompManagerI(){
		return complaintService.getAllCompManagerI();
	}
	
	@GetMapping("/getAllCompManagerJ")
	public List<Complaint> getAllCompManagerJ(){
		return complaintService.getAllCompManagerJ();
	}
}
