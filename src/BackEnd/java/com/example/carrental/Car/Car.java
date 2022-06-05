package com.example.carrental.Car;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;

@Data
@Entity
@Table
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Car {

    @Id
    private long id;

    private String name;
    private BigInteger price;
    private Integer doors;
    private  String type;
    private String img;
    private Integer passengers;
    private Integer bags;
}
