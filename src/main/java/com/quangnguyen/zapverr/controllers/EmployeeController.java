package com.quangnguyen.zapverr.controllers;

import com.quangnguyen.zapverr.models.Employee;
import com.quangnguyen.zapverr.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Get all current employees
    @GetMapping("/employee")
    public Collection<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    // Get the current logged in employee information
    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeInfo(@PathVariable long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create new employee account
    @PostMapping("/register")
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee) throws URISyntaxException {
        Employee savedEmployee = employeeRepository.save(employee);
        return ResponseEntity.created(new URI("/api/employee" + savedEmployee.getId())).body(savedEmployee);
    }

    // update an employee information
    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@Valid @RequestBody Employee employee) {
        Employee result = employeeRepository.save(employee);
        return ResponseEntity.ok().body(result);
    }

    // delete an employee account
    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable long id) {
        employeeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
