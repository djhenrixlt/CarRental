import React, {useEffect, useState} from "react";
import { getAll } from "../api/CarApi";
import Carhm from "../Carhm";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import {Box} from "@mui/system";
import {Avatar} from "@mui/material";
import Button from "@mui/material/Button";
import MenuListComposition from "../MenuListComposition";


const Filter = props => {
    const [cars, setCars] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadQueue();
    }, [])

    const loadQueue = () => {
        setIsLoading(true);
        getAll()
            .then(response => {
                setCars(response.data)
                console.log(response.data)
            }).catch((e)=>{
            console.log(e)
        })
            .finally(() => {
                setIsLoading(false);
            })


    }

    return(
        <div id="Filter">
            <div id="filter-type">
                <label className="filter-title">Type: </label>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" >

                <Tooltip
                    title="300+"
                    placement="top">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'down',
                            overflow: 'hidden',
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            border: 0,
                            borderRadius: 3,
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            color: 'white',
                            height: 48,
                            padding: '0 30px',
                            '&:hover': {
                                backgroundColor: '#abd4bf',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}

                        data-name="small"
                       onClick={cars.sort(b => "small", b)}
                    >

                        <Avatar src= "https://upload.wikimedia.org/wikipedia/commons/d/da/Seat_Ibiza_6J_Facelift_front_20140401.jpg"  />

                        small
                    </Box>
                </Tooltip>
                <Tooltip
                    title="400+"
                    placement="top">

                    <Button
                        data-name="medium"
                        onClick={e => props.allFilterClickListener(e, "medium")}
                    >
                        <Avatar src= "https://s1.cdn.autoevolution.com/images/news/2020-volkswagen-golf-8-official-photos-leaked-138493_1.jpg"  />
                        Medium
                    </Button>
                </Tooltip>
                <Tooltip
                    title="500+"
                    placement="top">
                    <Button
                        data-name="large"
                        onClick={e => props.allFilterClickListener(e, "large")}
                    >
                        <Avatar src= "https://upload.wikimedia.org/wikipedia/commons/d/da/Seat_Ibiza_6J_Facelift_front_20140401.jpg"  />
                        Large
                    </Button>
                </Tooltip>

                <Tooltip
                    title="600+"
                    placement="top">
                    <Button

                        data-name="suv"
                        onClick={e => props.allFilterClickListener(e, "suv")}
                    >
                        <Avatar src= "https://bildata.ofv.no/bildedata/cars/Audi/Q7/SUV/5/2B/Large_750x375/Front.jpg"  />
                        SUV
                    </Button>
                </Tooltip>
                <MenuListComposition></MenuListComposition>


            </ButtonGroup>
            </div>

        </div>
    )

}
export default Filter;
