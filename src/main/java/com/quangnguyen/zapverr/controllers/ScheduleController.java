package com.quangnguyen.zapverr.controllers;

import com.quangnguyen.zapverr.repositories.ShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ScheduleController {

    @Autowired
    ShiftRepository shiftRepository;


}
