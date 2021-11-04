
import { Card, CardActionArea, CardMedia, CardContent, Typography, Toolbar, TextField, InputAdornment, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { typography } from '@mui/system';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './calendar.css'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Arrow from "../assets/arrow.svg";
import Divider from '@mui/material/Divider';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';
//...
import CircleIcon from '@mui/icons-material/Circle';

const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: '30px',
        //  width:'1150px',  
        //  height:'1080px'
    },
    leaveCardInfo: {
        borderRadius: '30px',
        width: '700px',
        height: '450px',
        backgroundColor: "#C4D1FB"
    },
    payslipCardInfo: {
        borderRadius: '30px',
        width: '700px',
        height: '450px',
        backgroundColor: "#AAFFEA"
    },
    calendarsize: {
        borderRadius: '30px',
        width: '1550px',
        height: '950px',
    },

    bold_title: {
        fontWeight: 800
    },
    bold: {
        fontWeight: 300
    },
    rotate: {
        transform: "rotate(90deg)"
    },

    blueColor: {
        color: "#008BFF",
    },

    imgsize: {
        height: "50px",
        width: "50px"
    },
    leaveinfo: {
        width: '460px',
        height: '1010px',
        backgroundColor: '#ffcba3',
        boxShadow: 'none',
        borderRadius: '0 30px 30px 0'
    },
    infoheader: {
        backgroundColor: '#ffcba3',
    },
    cardinfo: {
        borderRadius: '15px',
         width:'420px',  
         height:'210px'
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


const Home = () => {
    const classes = useStyles();
    const [selectedDay, setSelectedDay] = useState('');
    const [leaves, setleaves] = useState('');
    const [value, setValue] = useState(new Date());
    const fetchleaves = async () => {
        await axios.get('http://localhost:5000/leaves')
            .then(res => {
                setleaves(res.data);
            })
    }
    useEffect(() => {
        fetchleaves()
    }, []);


    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Box>
            <Card classes={{ root: classes.card }} >
                <Box pt={5} ml={5}>
                    <Typography variant="h3">
                        Welcome, Mary!
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Box pl={20} pr={10} mt={5}>
                        <Card classes={{ root: classes.leaveCardInfo }}>
                            <Box sx={{ display: 'flex' }} mt={5} ml={5} >
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Typography variant="h3" className={classes.bold_title}>
                                            Annual Leave
                                        </Typography>
                                        <Box pt={10} pb={2}>
                                            <Typography variant='h5'>
                                                Applied :
                                            </Typography>
                                        </Box>
                                        <Box pt={3} pb={5}>
                                            <Typography variant='h5'>
                                                Balanced :
                                            </Typography>
                                        </Box>
                                        <Box pt={6} pb={5}>
                                            <Typography variant='h5'>
                                                Upcoming :
                                            </Typography>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mr={5}>
                                            <Typography variant="h3" className={classes.bold_title}>
                                                2021
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={10} pb={2} mr={5.5} >
                                            <Typography variant="h4">
                                                {leaves === '' ? '' : leaves[0].applied.annual}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={1.5} pb={5} mr={5.5}>
                                            <Typography variant="h4">
                                                {leaves === '' ? '' : leaves[0].left.annual}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={4} pb={5} mr={5}>
                                            {/* BUTTON HERE */}
                                            <img src={Arrow} className={classes.imgsize} />
                                        </Box>

                                    </Grid>

                                </Grid>

                            </Box>
                        </Card>
                    </Box>

                    <Box pl={10} pr={20} mt={5}>
                        <Card classes={{ root: classes.payslipCardInfo }}>
                            <Box sx={{ display: 'flex' }} mt={5} ml={5}>
                                <Typography>
                                    Payslip
                                </Typography>
                                <Box>
                                    <Typography>
                                        2021
                                    </Typography>
                                </Box>
                            </Box>

                        </Card>
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }} pt={5} mb={10} >
                    <Calendar

                        value={selectedDay}
                        onChange={setSelectedDay}
                        shouldHighlightWeekends
                        calendarTodayClassName="custom-today-day" // also this
                        calendarClassName="responsive-calendar" // added this
                        customDaysClassName={[
                            // here we add some CSS classes
                            { year: 2021, month: 10, day: 4, className: 'purpleDay' },
                            { year: 2021, month: 10, day: 12, className: 'orangeDay' },
                            { year: 2021, month: 10, day: 18, className: 'yellowDay' },
                            { year: 2021, month: 10, day: 26, className: 'navyBlueDay' },
                        ]}
                    />
                    <Box sx={{ position: 'relative', zIndex: '100', }} >
                        <Card className={classes.leaveinfo}  >
                            <Box className={classes.infoheader} sx={{ display: 'flex' }} pl={8} pt={2} pb={2.9}>
                                <Box sx={{ display: 'flex' }}>
                                    <Box mt={7.5}>
                                        <Typography variant='h4'>
                                            {weekday[d.getDay()]}
                                        </Typography>
                                        <Typography variant='h6'>
                                            {month[months]} {day}
                                        </Typography>
                                    </Box>
                                    <Box ml={7} mt={3}>
                                        <Clock value={value} />
                                    </Box>
                                </Box>
                            </Box>


                            <Box pl={2.5}>
                                <Card className={classes.cardinfo}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box>
                                            <Box pl={7} pt={5}>
                                                <Typography variant="h4">{month[3]} {day}, {year}</Typography>
                                            </Box>


                                            <Box sx={{ display: 'flex' }} ml={2}>

                                                <Box pt={3} >
                                                    <CircleIcon sx={{ fontSize: 25, color: 'lightblue' }} />
                                                </Box>

                                                <Box pl={2} pt={3}>
                                                    <Box>
                                                        <Typography>Annual Leave</Typography>
                                                    </Box>

                                                    <Box pt={2}>
                                                        <Typography>
                                                           3 days
                                                        </Typography>
                                                    </Box>

                                                </Box>

                                            </Box>

                                        </Box>

                                    </Box>
                                </Card>
                            </Box>




                        </Card>
                    </Box>
                </Box>
            </Card>

        </Box>
    )
};

export default Home;