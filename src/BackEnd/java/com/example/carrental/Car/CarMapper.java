package com.example.carrental.Car;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CarMapper {

    CarMapper MEET_MAPPER = Mappers.getMapper(CarMapper.class);

    CarDto map(Car car);
    Car mapDto(CarDto carDto);
}
