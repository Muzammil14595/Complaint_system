package com.complaint.system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.complaint.system.entity.Complaint;

@Repository
public interface ComplaintRepo extends JpaRepository<Complaint, Integer> {
	@Query("from Complaint c where c.userPincode=700101")
	public List<Complaint> getAllComplaintsManagerA();
	
	@Query("from Complaint c where c.userPincode=700102")
	public List<Complaint> getAllComplaintsManagerB();
	
	@Query("from Complaint c where c.userPincode=700103")
	public List<Complaint> getAllComplaintsManagerC();
	
	@Query("from Complaint c where c.userPincode=700104")
	public List<Complaint> getAllComplaintsManagerD();
	
	@Query("from Complaint c where c.userPincode=700105")
	public List<Complaint> getAllComplaintsManagerE();
	
	@Query("from Complaint c where c.userPincode=700106")
	public List<Complaint> getAllComplaintsManagerF();
	
	@Query("from Complaint c where c.userPincode=700107")
	public List<Complaint> getAllComplaintsManagerG();
	
	@Query("from Complaint c where c.userPincode=700108")
	public List<Complaint> getAllComplaintsManagerH();
	
	@Query("from Complaint c where c.userPincode=700109")
	public List<Complaint> getAllComplaintsManagerI();
	
	@Query("from Complaint c where c.userPincode=700110")
	public List<Complaint> getAllComplaintsManagerJ();
}
