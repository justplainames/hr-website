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
    console.log('im at the list')
    console.log(details)



    return (
        <Box pl={2} pt={2}>
            <Element name="test1" className="element" >
            {/* <Box sx={{ display: 'flex' ,justifyContent:'flex-end'}} pr={2} mt={1}>
                        <CircleIcon sx={{ fontSize: 15 }} ></CircleIcon>
                    </Box>  */}
                     <Grid container spacing={2}>
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
                    <Box sx={{ display: 'flex' ,justifyContent:'flex-end'}} pr={2} mt={1}>
                        <CircleIcon sx={{ fontSize: 15 }} ></CircleIcon>
                    </Box>
                        </Grid>
                   </Grid>
{
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
}
                <Divider />
            </Element>
        </Box>

    )

}