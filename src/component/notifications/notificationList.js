import React, { useState, useEffect } from 'react';
import "@fontsource/montserrat"
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function NotificationList({ details, ...others }) {



    return (
        <Box pt={2}>
            <Element name="test1" className="element" >

                <Grid container spacing={2} pl={2}>
                    <Grid item xs={10}>
                        <Box sx={{ display: 'flex' }} pb={1}>
                            <Box pr={2}>
                                <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography>
                                    {details.name} has recommended leave for you on the {details.requested}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pr={2} mt={1}>
                            {details.read === true ? <CircleIcon sx={{ fontSize: 15, color: 'lightblue' }} ></CircleIcon> : <CircleIcon sx={{ fontSize: 15, color: 'white' }} ></CircleIcon>}
                        </Box>
                    </Grid>
                </Grid>
                {
                    details.accepted === "null" ?
                        <Box pl={8} pb={2} sx={{ display: 'flex' }}>
                            <Box pr={1}>
                                <Button variant="contained" color="success" size="small">
                                    Accept
                                </Button>
                            </Box>
                            <Button variant="outlined" color="error" size="small">
                                Decline
                            </Button>
                        </Box> 
                        
                        :

                        <Box pl={8} pb={2} sx={{ display: 'flex' }}>
                            <Typography>{details.accepted}</Typography>
                        </Box>
                }
                <Divider />
            </Element>
        </Box>

    )

}