import React, {useEffect, useState} from "react";
import Carhm from "../Carhm";

const FilterContainer = props =>{
    const [add, setAdd] = useState(6);
    const moreCars= () => setAdd(add+6)
    const handleScroll = () => {
        const windowHeight =
            "innerHeight" in window
                ? window.innerHeight
                : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        const scrollable = docHeight - windowHeight;
        const scrolled = window.scrollY;
        if (Math.ceil(scrolled) === scrollable) {
            moreCars();
        }
    };

    useEffect(() => {
        console.log("SCROLL EVENTLISTENER ADDED");
        window.addEventListener("scroll", handleScroll);

        return () => {
            console.log("SCROLL EVENTLISTENER REMOVED");
            window.removeEventListener("scroll", handleScroll);
        }
    });

    const carList = props.cars
        .slice(0,add)
        .map(car => {
            return <Carhm key={car.id} car={car}/>
        });


}

export default FilterContainer;
