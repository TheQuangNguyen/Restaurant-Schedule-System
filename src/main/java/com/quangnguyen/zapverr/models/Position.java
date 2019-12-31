package com.quangnguyen.zapverr.models;

import javax.persistence.*;
import java.util.List;

// Models each job position that the restaurant has
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
