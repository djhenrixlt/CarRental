import React from "react";
import Filter from "./Filter";

const CarFilterContainer = props => {
    return(
        <div id="carFilterCon">
            <Filter allFilterClickListener={props.allFilterClickListener}/>

        </div>
    );

}
export default CarFilterContainer ;
