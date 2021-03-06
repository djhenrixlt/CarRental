package com.example.carrental.Car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepo extends JpaRepository<Car,Long> {

    List<Car> findAll();

    List<Car> findByTypeIsBeforeAndTypeAfter(String type1, String type2);
}
