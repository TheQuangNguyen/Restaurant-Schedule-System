package com.quangnguyen.zapverr.models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

// models each shift of a particular day
@Entity
public class Shift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String title;
    String startTime;
    String endTime;
    String dayOfWeek;
    Date currentDate;

    @ManyToMany
    List<Employee> employees;

    @ManyToMany
    List<Position> positions;
}
