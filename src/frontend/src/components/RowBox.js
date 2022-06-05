import React from "react";
import {useState} from "react";

import GetAllCars from "./GetAllCars";

const RowBox = (item) => {
    const [light, setLight] = React.useState(true);

    const [cars, setCars] = item;

    const menuItems = [...new Set(cars.map((Val) => Val.type))];

    const filterItem = (curcat) =>{
        const newItem = cars.filter((newVal) =>{
            return newVal.type === curcat;
        });
        setCars(newItem);
    };
    return(
        <GetAllCars
        cars={cars}/>
    )
}
export default RowBox;
