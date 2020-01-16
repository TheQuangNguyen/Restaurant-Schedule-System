package com.quangnguyen.zapverr.models;

import com.quangnguyen.zapverr.models.enums.DayOfWeek;
import com.quangnguyen.zapverr.models.enums.ShiftTitle;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

// models each shift of a particular day
@Data
@Entity
public class Shift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    ShiftTitle title;
    String startTime;
    String endTime;
    DayOfWeek dayOfWeek;
    Date date;

    @ManyToMany
    Set<Employee> employees;

    @ManyToMany
    Set<Position> positions;

    public Shift(ShiftTitle title, String startTime, String endTime, DayOfWeek dayOfWeek, Date date) {
        this.title = title;
        this.startTime = startTime;
        this.endTime = endTime;
        this.dayOfWeek = dayOfWeek;
        this.date = date;
        this.employees = new HashSet<>();
        this.positions = new HashSet<>();
    }
}
