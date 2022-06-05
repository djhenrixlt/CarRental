package com.example.carrental.Car;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CarDto {
    @Id
    private long id;

    private String name;
    private  String seats;
    private Integer doors;
    private  String type;
    private String img;
    private Integer passengers;
    private Integer bags;
}
