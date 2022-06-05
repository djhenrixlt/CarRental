import './App.css';


import * as React from 'react';
import {createTheme} from "@mui/material/styles";
import Filter from "./Container/Filter";
import Carhm from "./Carhm";

const themeLight = createTheme({
    palette: {
        background: {
            default: "#e4f0e2"
        }
    }
});

const themeDark = createTheme({
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

function App() {
    // const [light, setLight] = React.useState(true);
    //
    // const [item, setItem] = useState(Data);
    //
    // const menuItems = [...new Set(Data.map((Val) => Val.type))];
    //
    // const filterItem = (curcat) =>{
    //     const newItem = Data.filter((newVal) =>{
    //         return newVal.type === curcat;
    //     });
    //     setItem(newItem);
    // };

    return (


        <div className="App">

            <header className="App-header">
                <h1 className="col-12 text-center my-3 fw-bold">Car type</h1>
                <Filter></Filter>
            </header>
        </div>
    );
}


export default App;
