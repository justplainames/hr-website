import React, { useState, useEffect } from 'react';
import "@fontsource/montserrat"
import { makeStyles } from '@material-ui/core/styles';

import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Toolbar, TextField, InputAdornment, Box } from '@material-ui/core'
import Button from '@mui/material/Button';

import { cssname } from '../../utils/cssname';
import axios from 'axios';

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
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

export default function Applied({ details, ...others }) {
    const classes = useStyles();
    //console.log("These are the details:")
    const [editdate,seteditdate] = useState(0);
    const [editdateto,seteditdateto] = useState(0);

    useEffect(() => {
       const date = details.from
       const dateTo = details.to
       const splitDate = date.split("/");
       const splitDateTo = dateTo.split("/");
       seteditdate(splitDate)
       seteditdateto(splitDateTo)
    }, []);

    const startMonth = month[editdate[0]-1]
    const startDay = editdate[1]
    const startYear = editdate[2]
    const endMonth = month[editdateto[0]-1]
    const endDay = editdateto[1]
    const endYear = editdateto[2]

    const handleDelete = (e) => {
        const id = localStorage.getItem("isAuthenticated");
        e.preventDefault();

        axios.post('http://localhost:5000/deleteApplied',
        {
            "userId": id,
        }).then(res=>{
            localStorage.setItem("isAuthenticated", res.data._id)
        })
    }
    

    return (
        <Box pl={2.5} pt={3}>
            <Card className={classes.cardinfo}>
                <Box sx={{ display: 'flex' }} pl = {2}>
                    <Box>
                        <Box sx={{ display: 'flex'}} >
                            <Box pl ={2} pt={1.8} mr = {1}>
                                <Typography variant="h5">{details.types.charAt(0).toUpperCase() + details.types.slice(1)}  {details.types==='meeting' | details.types==='course' ? '' : 'Leave'} </Typography>
                            </Box>
                            <Box pt={2}>                                                                
                                {<CircleIcon sx={{ fontSize: 25, color: cssname(details.types)[1] }} />}                              
                            </Box>
                        </Box>


                        <Box sx={{ display: 'flex' }} ml={2}>


                            <Box >
                                <Box pt={2.5}>                     
                                    {details.from === details.to ? <Typography>{startMonth} {startDay}, {startYear} </Typography> : <Typography> {startMonth} {startDay}, {startYear} - {endMonth} {endDay}, {endYear} </Typography>}                                           
                                </Box>

                                <Box pt={2}>
                                    <Typography>         
                                        {details.types==='meeting' ? 'Time: 9am - 10am' : ''}                                                                 
                                        {details.types==='meeting' ? '' : details.days===1 ? details.days + ' day' + ' (' + details.daytype + ')' : details.days + ' days' + ' (' + details.daytype + ')'} 
                                    </Typography>
                                </Box>

                                <Box sx={{display: "flex"}}>
                                    <Box pt={2} style={{width:'200px'}}>
                                        {
                                            details.remarks === 'nil' ?
                                                <Typography >
                                                    {''}
                                                </Typography> 
                                                :
                                                <Typography>
                                                    Details: {details.remarks} 
                                                </Typography>
                                        }
                                    </Box>

                                    <Box pt = {4} pl = {1}>
                                        {details.types !== 'meeting' && details.types !== 'course' ? <Button onClick={handleDelete} variant="outlined" color="error" size="small"> Cancel Leave </Button> : ''} 
                                    </Box>


                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>
            </Card>
        </Box>

    )

}