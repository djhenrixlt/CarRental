import React from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, sizing} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import DoorBackIcon from '@mui/icons-material/DoorBack';

const GetAllCars = () =>{
    return(
        <div>

            {/*<List sx={{ width: 'auto', maxWidth: "500", bgcolor: 'background' }}>*/}
            {/*    {cars.map((Val) => {*/}
            {/*        return(*/}
            {/*            <ListItem alignItems="flex-start"*/}
            {/*                      key={Val.id}>*/}
            {/*                <ListItemAvatar>*/}
            {/*                    <Avatar src={Val.img} alt={Val.name}  />*/}
            {/*                </ListItemAvatar>*/}
            {/*                <ListItemText*/}
            {/*                    primary={Val.name}*/}
            {/*                    secondary={*/}
            {/*                        <React.Fragment>*/}
            {/*                            <Typography*/}
            {/*                                sx={{ display: 'row' }}*/}
            {/*                                component="span"*/}
            {/*                                variant="body2"*/}
            {/*                                color="text.primary"*/}
            {/*                            >*/}

            {/*                                {Val.passengers}*/}
            {/*                                <PersonIcon></PersonIcon>*/}


            {/*                            </Typography>*/}

            {/*                        </React.Fragment>*/}
            {/*                    }*/}
            {/*                />*/}
            {/*                <ListItemText*/}
            {/*                    primary={Val.price}*/}
            {/*                    secondary={*/}
            {/*                        <React.Fragment>*/}
            {/*                            <Typography*/}
            {/*                                sx={{ display: 'row' }}*/}
            {/*                                component="span"*/}
            {/*                                variant="body2"*/}
            {/*                                color="text.primary"*/}
            {/*                            >*/}
            {/*                                <DoorBackIcon></DoorBackIcon>*/}
            {/*                                {Val.doors}*/}

            {/*                            </Typography>*/}
            {/*                            <LuggageIcon></LuggageIcon>*/}
            {/*                            {Val.bags}*/}
            {/*                        </React.Fragment>*/}
            {/*                    }*/}
            {/*                />*/}
            {/*            </ListItem>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</List>*/}

        </div>

    );
};
export default GetAllCars;
