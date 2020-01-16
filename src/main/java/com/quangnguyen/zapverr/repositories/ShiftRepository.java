package com.quangnguyen.zapverr.repositories;

import com.quangnguyen.zapverr.models.Shift;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShiftRepository extends JpaRepository<Shift, Long> {
}
