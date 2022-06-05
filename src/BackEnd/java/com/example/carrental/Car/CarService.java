package com.example.carrental.Car;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CarService {

    private final CarRepo carRepo;
    private final  CarMapper carMapper;

    public List<CarDto> findAll(){
        return carRepo.findAll()
                .stream().map(CarMapper.MEET_MAPPER::map)
                .collect(Collectors.toList());
    }
}
