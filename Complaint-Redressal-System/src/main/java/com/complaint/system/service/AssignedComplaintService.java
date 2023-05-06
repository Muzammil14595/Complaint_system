package com.complaint.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaint.system.entity.AssignedComplaint;
import com.complaint.system.repository.AssignedComplaintRepo;

@Service
public class AssignedComplaintService {

	@Autowired
	private AssignedComplaintRepo repo;
	
	public AssignedComplaint addComplaint(AssignedComplaint assignedComplaint) {
		return repo.save(assignedComplaint);
	}
	
	public List<AssignedComplaint> getAllAssignedComplaints(){
		return repo.findAll();
	}

	public void delComplaint(int id) {
		repo.deleteById(id);
	}
	
	public List<AssignedComplaint> getAllCompEngineerA(){
		return repo.getAllComplaintsEngineerA();
	}
	
	public List<AssignedComplaint> getAllCompEngineerB(){
		return repo.getAllComplaintsEngineerB();
	}
	
	public List<AssignedComplaint> getAllCompEngineerC(){
		return repo.getAllComplaintsEngineerC();
	}
	
	public List<AssignedComplaint> getAllCompEngineerD(){
		return repo.getAllComplaintsEngineerD();
	}
	
	public List<AssignedComplaint> getAllCompEngineerE(){
		return repo.getAllComplaintsEngineerE();
	}
	
	public List<AssignedComplaint> getAllCompEngineerF(){
		return repo.getAllComplaintsEngineerF();
	}
	
	public List<AssignedComplaint> getAllCompEngineerG(){
		return repo.getAllComplaintsEngineerG();
	}
	
	public List<AssignedComplaint> getAllCompEngineerH(){
		return repo.getAllComplaintsEngineerH();
	}
	
	public List<AssignedComplaint> getAllCompEngineerI(){
		return repo.getAllComplaintsEngineerI();
	}
	
	public List<AssignedComplaint> getAllCompEngineerJ(){
		return repo.getAllComplaintsEngineerJ();
	}
}
