package com.quangnguyen.zapverr.models;

import com.quangnguyen.zapverr.models.enums.JobTitle;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

// Models each job position that the restaurant has
@Data
@Entity
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    JobTitle jobTitle;
    double hourlyWage;

    @OneToMany(mappedBy = "jobPosition")
    Set<Employee> employees;

    public Position(JobTitle jobTitle) {
        this.jobTitle = jobTitle;
        this.employees = new HashSet<>();
    }

    public boolean addEmployee(Employee employee) {
        return this.employees.add(employee);
    }
    public void setHourlyWage(int hourlyWage) {
        if (hourlyWage < 0) {
            throw new IllegalArgumentException("Hourly wages cannot be below 0");
        }
        this.hourlyWage = hourlyWage;
    }
}
