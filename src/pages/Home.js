
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
//...


const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: '30px',
        // width:'1150px',  
        // height:'1080px'
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
    }


}))

const Home = () => {
    const classes = useStyles();
    const [selectedDay, setSelectedDay] = useState('');
    const [leaves, setleaves] = useState('')
    const fetchleaves = async () => {
        await axios.get('http://localhost:5000/leaves')
            .then(res => {
                setleaves(res.data);
            })
    }

    useEffect(() => {
        fetchleaves()
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
                                            <Typography >
                                                Applied :
                                            </Typography>
                                        </Box>
                                        <Box pt={3} pb={5}>
                                            <Typography>
                                                Balanced :
                                            </Typography>
                                        </Box>
                                        <Box pt={6} pb={5}>
                                            <Typography>
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
                                        <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={10} pb={2}  mr={10}>
                                            <Typography className={classes.bold}>
                                                {leaves ===''?'':leaves[0].applied.annual}
                                            </Typography>
                                        </Box>
                                        <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={3} pb={5} mr={10}>
                                            <Typography className={classes.bold}>                                                
                                                {leaves ===''?'':leaves[0].left.annual}
                                            </Typography>
                                        </Box>

                                        <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={6} pb={5} mr={10}>
                                            {/* BUTTON HERE */}
                                            <Typography>
                                          BUTTON HERE
                                            </Typography>
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
                </Box>
            </Card>

        </Box>
    )
};

export default Home;