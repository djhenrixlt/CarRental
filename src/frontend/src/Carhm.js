import React from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, sizing} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import DoorBackIcon from '@mui/icons-material/DoorBack';

const Carhm = cars =>{

    return(
        <div>

            <List sx={{ width: 'auto', maxWidth: "500", bgcolor: 'background' }}>
                {cars.map((car) => {
                    return(
                        <ListItem alignItems="flex-start"
                                  key={car.id}>
                            <ListItemAvatar>
                                <Avatar src={car.img} alt={car.name}  />
                            </ListItemAvatar>
                            <ListItemText
                                primary={car.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'row' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >

                                            {car.passengers}
                                            <PersonIcon></PersonIcon>


                                        </Typography>

                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={car.price}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'row' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <DoorBackIcon></DoorBackIcon>
                                            {car.doors}

                                        </Typography>
                                        <LuggageIcon></LuggageIcon>
                                        {car.bags}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    )
                })}
            </List>

        </div>

    );
};
export default Carhm;
