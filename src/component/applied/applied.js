import React, { useState, useEffect } from 'react';
import "@fontsource/montserrat"
import { makeStyles } from '@material-ui/core/styles';

import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Toolbar, TextField, InputAdornment, Box, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    cardinfo: {
        borderRadius: '15px',
        width: '380px',
        height: '210px'
    }

}))

const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let months = d.getMonth();
let day = d.getDate();
let year = d.getFullYear();
const month = new Array(12);
month[0] = "January";
month[1] = "Febuary";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

export default function Applied({ details, ...others }) {
    const classes = useStyles();



    return (
        <Box pl={2.5} pt={3}>
            <Card className={classes.cardinfo}>
                <Box sx={{ display: 'flex' }}>
                    <Box>
                        <Box pl={7} pt={3}>
                            <Typography variant="h4">{month[3]} {day}, {year}</Typography>
                        </Box>


                        <Box sx={{ display: 'flex' }} ml={2}>

                            <Box pt={2} >
                                <CircleIcon sx={{ fontSize: 25, color: 'lightblue' }} />
                            </Box>

                            <Box pl={2} pt={2} >
                                <Box>
                                    <Typography>{details.types.charAt(0).toUpperCase() + details.types.slice(1)}  {details.types!=='annual'? '' : 'Leave'}</Typography>
                                </Box>

                                <Box pt={2}>
                                    <Typography>
                                        {details.days===0?"1":details.days} days
                                    </Typography>
                                </Box>

                                <Box pt={2} style={{width:'300px'}}>
                                    {
                                        details.remarks === 'nil' ?
                                            <Typography >
                                                {''}
                                            </Typography> 
                                            :
                                            <Typography noWrap>
                                                {details.remarks} 
                                            </Typography>
                                    }

                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>
            </Card>
        </Box>

    )

}