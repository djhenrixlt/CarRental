import './App.css';

import * as React from 'react';
import {createTheme} from "@mui/material/styles";
import Filter from "./Container/Filter";
import Carhm from "./Carhm";
import {useEffect, useState} from "@types/react";
import {getAll} from "./api/CarApi";
import module  from '@types/react';
import data from "./Data";


function App() {
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

        const [light, setLight] = React.useState(true);

    const [item, setItem] = useState(cars);

    const menuItems = [...new Set(data.map((Val) => Val.type))];

    const filterItem = (curcat) =>{
        const newItem = data.filter((newVal) =>{
            return newVal.type === curcat;
        });
        setItem(newItem);
    }

    return (


        <div className="App">

            <header className="App-header">
                <h1 className="col-12 text-center my-3 fw-bold">Car type</h1>
                <Filter  filterItem={filterItem}
                         setItem={setItem}
                         menuItems={menuItems}
                ></Filter>
                <Carhm item ={item}></Carhm>
            </header>
        </div>
    );

}


export default App;
