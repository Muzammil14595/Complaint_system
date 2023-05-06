package com.complaint.system.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaint.system.entity.Complaint;
import com.complaint.system.repository.ComplaintRepo;

@Service
public class ComplaintService {

	@Autowired
	ComplaintRepo complaintRepo;
	
	public Complaint addComplaint(Complaint complaint) {
		return complaintRepo.save(complaint);
	}
	
	public List<Complaint> getAllComplaints(){
		return complaintRepo.findAll();
	}

	public void delComplaint(int id) {
		complaintRepo.deleteById(id);
	}
	
	public List<Complaint> getAllRaisedComplaints(){
		List<Complaint> allComp = complaintRepo.findAll();
		List<Complaint> raiseComp = new ArrayList<Complaint>();
		for (Complaint complaint : allComp) {
			if(complaint.isStatus()!=true) {
				raiseComp.add(complaint);
			}
		}
		return raiseComp;
	}
	
	public List<Complaint> getAllCompManagerA(){
		return complaintRepo.getAllComplaintsManagerA();
	}
	
	public List<Complaint> getAllCompManagerB(){
		return complaintRepo.getAllComplaintsManagerB();
	}
	
	public List<Complaint> getAllCompManagerC(){
		return complaintRepo.getAllComplaintsManagerC();
	}
	
	public List<Complaint> getAllCompManagerD(){
		return complaintRepo.getAllComplaintsManagerD();
	}
	
	public List<Complaint> getAllCompManagerE(){
		return complaintRepo.getAllComplaintsManagerE();
	}
	
	public List<Complaint> getAllCompManagerF(){
		return complaintRepo.getAllComplaintsManagerF();
	}
	
	public List<Complaint> getAllCompManagerG(){
		return complaintRepo.getAllComplaintsManagerG();
	}
	
	public List<Complaint> getAllCompManagerH(){
		return complaintRepo.getAllComplaintsManagerH();
	}
	
	public List<Complaint> getAllCompManagerI(){
		return complaintRepo.getAllComplaintsManagerI();
	}
	
	public List<Complaint> getAllCompManagerJ(){
		return complaintRepo.getAllComplaintsManagerJ();
	}
}
