import React, {useState} from "react";
import Data from  "./Data";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from "@mui/material/Avatar"
import  MenuListComposition from "./MenuListComposition"
import Tooltip from "@mui/material/Tooltip"
import Checkbox from '@mui/material/Checkbox';

const type = ["small", "medium", "large", "suv", "van", "luxury", "truck", "convertible"];

const state = {
    userInputContainerClicked: false,

    type: {
        small: false,
        medium: false,
        large: false,
        suv: false,
        van: false,
        luxury: false,
        truck: false,
        convertible: false
    }

}


const  Buttons = ({filterItem, setItem, menuItems, item}) =>{
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [isChecked, setIsChecked] = useState(false);
    //meginu nauja



    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className="d-flex justify-content-center">
                {menuItems.map((Val, id)=> {
                    return(
                        <Checkbox

                            {...label} defaultUnChecked >{Val}</Checkbox>

                    )
                })}

                {/*<Checkbox {...label} />*/}
                {/*<Checkbox {...label} disabled />*/}
                {/*<Checkbox {...label} disabled checked />*/}

            </ButtonGroup>


        <ButtonGroup variant="contained" aria-label="outlined primary button group" className="d-flex justify-content-center">

            {/*{menuItems.map((Val, id) => {*/}
            {/*    return(*/}
            {/*        <button*/}
            {/*            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"*/}
            {/*            onClick={() => filterItem(Val)}*/}
            {/*            key={id}*/}
            {/*            >*/}
            {/*            {Val}*/}
            {/*        </button>*/}
            {/*    );*/}
            {/*})}*/}

            <Button
                onClick={() => setItem(Data)}
            >
                ALL
            </Button>
            <Tooltip
                title="300+"
                placement="top">
                <Button
                    onClickCapture={() => filterItem("small")}
                >

                    <Avatar src= "https://upload.wikimedia.org/wikipedia/commons/d/da/Seat_Ibiza_6J_Facelift_front_20140401.jpg"  />

                    small
                </Button>
            </Tooltip>
            <Tooltip
                title="400+"
                placement="top">

                <Button
                    onClickCapture={() => filterItem("medium")}
                >
                    <Avatar src= "https://s1.cdn.autoevolution.com/images/news/2020-volkswagen-golf-8-official-photos-leaked-138493_1.jpg"  />
                    Medium
                </Button>
            </Tooltip>
            <Tooltip
                title="500+"
                placement="top">
                <Button
                    onClick={() => filterItem("large")}
                >
                    <Avatar src= "https://upload.wikimedia.org/wikipedia/commons/d/da/Seat_Ibiza_6J_Facelift_front_20140401.jpg"  />
                    Large
                </Button>
            </Tooltip>

            <Tooltip
                title="600+"
                placement="top">
                <Button

                    onClick={() => filterItem("suv")}
                >
                    <Avatar src= "https://bildata.ofv.no/bildedata/cars/Audi/Q7/SUV/5/2B/Large_750x375/Front.jpg"  />
                    SUV
                </Button>
            </Tooltip>
            <MenuListComposition></MenuListComposition>


        </ButtonGroup>
        </div>
    )
};

export default Buttons;
