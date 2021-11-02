
import { Card, CardActionArea, CardMedia, CardContent, Typography, Toolbar, TextField, InputAdornment, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { typography } from '@mui/system';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './calendar.css'
import { useMediaQuery } from 'react-responsive'

//...


const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: '30px',
        // width:'1150px',  
        // height:'1080px'
    },
    cardinfo: {
        borderRadius: '30px',
        width: '700px',
        height: '450px'
    },
    calendarsize: {
        borderRadius: '30px',
        width: '1550px',
        height: '950px',
    }


}))


const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const classes = useStyles();

    const [selectedDay, setSelectedDay] = useState('');
    return (
        <Box>
            <Card classes={{ root: classes.card }} >
                <Box pt={5} ml={5}>
                    <Typography variant="h3">
                        Welcome Mary
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Box pl={20} pr={10} mt={5}>
                        <Card classes={{ root: classes.cardinfo }}>
                            <Box sx={{ display: 'flex' }} mt={5} ml={5} >
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Typography variant="h3">
                                            Annual Leave
                                        </Typography>
                                        <Box pt={10} pb={5}>
                                            <Typography >
                                                Applied :
                                            </Typography>
                                        </Box>
                                        <Box pt={3} pb={5}>
                                            <Typography>
                                                Balaced :
                                            </Typography>
                                        </Box>
                                        <Box pt={3} pb={5}>
                                            <Typography>
                                                Upcoming :
                                            </Typography>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mr={5}>
                                            <Typography variant="h3">
                                                2021
                                            </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>

                            </Box>
                        </Card>
                    </Box>

                    <Box pl={10} pr={20} mt={5}>
                        <Card classes={{ root: classes.cardinfo }}>
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