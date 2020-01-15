package com.quangnguyen.zapverr.repositories;

import com.quangnguyen.zapverr.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
