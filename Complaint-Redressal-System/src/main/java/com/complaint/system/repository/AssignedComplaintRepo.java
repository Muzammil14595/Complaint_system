package com.complaint.system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.complaint.system.entity.AssignedComplaint;

@Repository
public interface AssignedComplaintRepo extends JpaRepository<AssignedComplaint, Integer> {

	@Query("from AssignedComplaint a where a.userPincode=700101")
	public List<AssignedComplaint> getAllComplaintsEngineerA();
	
	@Query("from AssignedComplaint a where a.userPincode=700102")
	public List<AssignedComplaint> getAllComplaintsEngineerB();
	
	@Query("from AssignedComplaint a where a.userPincode=700103")
	public List<AssignedComplaint> getAllComplaintsEngineerC();
	
	@Query("from AssignedComplaint a where a.userPincode=700104")
	public List<AssignedComplaint> getAllComplaintsEngineerD();
	
	@Query("from AssignedComplaint a where a.userPincode=700105")
	public List<AssignedComplaint> getAllComplaintsEngineerE();
	
	@Query("from AssignedComplaint a where a.userPincode=700106")
	public List<AssignedComplaint> getAllComplaintsEngineerF();
	
	@Query("from AssignedComplaint a where a.userPincode=700107")
	public List<AssignedComplaint> getAllComplaintsEngineerG();
	
	@Query("from AssignedComplaint a where a.userPincode=700108")
	public List<AssignedComplaint> getAllComplaintsEngineerH();
	
	@Query("from AssignedComplaint a where a.userPincode=700109")
	public List<AssignedComplaint> getAllComplaintsEngineerI();
	
	@Query("from AssignedComplaint a where a.userPincode=700110")
	public List<AssignedComplaint> getAllComplaintsEngineerJ();
}
