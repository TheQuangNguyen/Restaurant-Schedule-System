package com.quangnguyen.zapverr.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

// Models each job position that the restaurant has
@AllArgsConstructor
@Data
@Entity
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String jobTitle;
    double hourlyWage;

    @OneToMany(mappedBy = "jobPosition")
    List<Employee> employees;

}
