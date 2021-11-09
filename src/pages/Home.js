
import { Card, Typography, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './calendar.css'
import axios from 'axios';
import Arrow from "../assets/arrow.svg";
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';
import AppliedList from '../component/applied/appliedList';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { VisibilityOff, Visibility } from '@mui/icons-material'

import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import DownloadIcon from '@mui/icons-material/Download';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//...

import { cssname } from '../utils/cssname';
const useStyles = makeStyles(theme => ({
    card: {

        borderRadius: '30px',
        width: "1600px"
    },
    leaveCardInfo: {
        borderRadius: '30px',
        width: '600px',
        height: '450px',
        backgroundColor: "#C4D1FB"
    },
    payslipCardInfo: {
        borderRadius: '30px',
        width: '600px',
        height: '450px',
        backgroundColor: "#a6e7ff"
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
        width: '420px',
        height: '1050px',
        backgroundColor: '#dcdedc',
        boxShadow: 'none',
        borderRadius: '0 30px 30px 0'
    },
    infoheader: {
        backgroundColor: '#dcdedc',
        paddingBottom: '20px',
        paddingLeft: '35px'
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
    const [applied, setapplied] = useState([]);
    const [leaves, setleaves] = useState('');
    const [value, setValue] = useState(new Date());
    const [calenval, setcalenval] = useState([]);
    //payslip    
    const [password, setPassword] = useState('');
    const [passworderror, setPasswordErr] = useState([]);
    const [openNov, setOpenNov] = useState(false);
    const [passwordShownNov, setPasswordShownNov] = useState(false);

    const [secret, setsecret] = useState(true);
    const [openPw, setOpenPw] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const calendardetails = (data) => {

        for (var i = 0; i < data.length; i++) {
            var datecounter;

            for (var z = 0; z <= data[i].days; z++) {
                var template = {
                    year: 2021, month: 10, day: 4, className: ''
                }
                var find = '/';
                var re = new RegExp(find, 'g');
                var date = data[i].from.replace(re, '-');
                var dd;
                if (z === 0) {
                    dd = new Date(date)
                    datecounter = dd
                }
                else {
                    if(data[i].days ===1)
                    {
                        break;
                    }
                    else{
                    var set = new Date(datecounter)
                    var set2 = set.setDate(set.getDate() + 1)
                    dd = new Date(set2)
                    datecounter = dd
                    }
                }


                const monthh = dd.getMonth();
                const yearr = dd.getFullYear();
                const dayy = dd.getDate();
                template.year = yearr
                template.month = monthh + 1
                template.day = dayy

                if (data[i].approved && (data[i].types === 'meeting' || data[i].types === 'course')) {
                    template.className = cssname(data[i].types)[0]
                }
                else if (data[i].approved) {
                    template.className = cssname('approved')[0]
                    console.log(template.className)
                }
                else {
                    template.className = cssname(data[i].types)[0]  
                }

                setcalenval(oldArray => [...oldArray, template]);
                if (z !== 0 && z == data[i].days - 1) {
                    break;
                }
            }

        }

    }

    const fetchapplied =  (id) => {
         axios.get('http://localhost:5000/applied', {
            params: {
                id: id
            }
        })
            .then(res => {
               // console.log(res.data)
                setapplied(res.data.applies);
                calendardetails(res.data.applies)
            })
    }

    const fetchleaves = async (id) => {
        await axios.get('http://localhost:5000/leaves', {
            params: {
                id: id
            }
        })
            .then(res => {
                //console.log(res.data)
                setleaves(res.data);
            })
    }

    useEffect(() => {
        const id = localStorage.getItem("isAuthenticated");
        fetchapplied(id)
    }, []);

    console.log(applied)


    useEffect(() => {
        const id = localStorage.getItem("isAuthenticated");
        fetchleaves(id)
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
    //payslip download pdf

    const handleClickOpenNov = () => {
        setOpenNov(true);
    };
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShownNov(!passwordShownNov);
    };
    const handleClose = () => {
        setOpenNov(false);
        setOpenPw(false);
        setPasswordShownNov(false);
        resetInputField();
        resetError();

    };

    const resetInputField = () => {
        setPassword("");

    };
    const resetError = () => {
        setPasswordErr("");

    };

    const onSubmitNov = (e) => {
        e.preventDefault();
        const isValid = formValidation();       
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104061756502048/NOV.pdf';
            handleClose();
            resetInputField();
        }
    };


    const formValidation = () => {
        const passworderror = {};
        let isValid = true;
        if (password.trim().length == 0) {
            passworderror.passwordlength = "Password need to be filled up before submitting"
            isValid = false
        }
        else if (password != "hcipassword123") {
            passworderror.passwordlength = "Incorrect Password! Please try again"
            isValid = false

        }
        setPasswordErr(passworderror);
        return isValid;
    };

    //payslip secret
    const handleClickOpenPw  = () => {
        setOpenPw(true);
    }; 

    const onEnterPw = (e) => {
        e.preventDefault(); 
        setIsValid(formValidation());    
        if (isValid) {
            setsecret(false);  
            handleClose();
            resetInputField();
        }
    };

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const [firstName, setFirstName] = useState("")

    const fetchProfile = async () => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        await axios.get('http://localhost:5000/profiles', {
            params: {
                id: isAuthenticated
            }
        })
            .then(res => {
                setFirstName((res.data.name).split(" ")[0]);
            })
    }

    useEffect(() => {   
        if (isAuthenticated) {
            fetchProfile()
        }
    }, []);


    return (
        <Box mt={4}>
            <Card classes={{ root: classes.card }} >
                <Box pt={5} ml={5}>
                    <Typography variant="h3">
                        Welcome, {firstName}!
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Box pl={15} pr={10} mt={5}>
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
                                                {leaves === '' ? '' : leaves.applied.annual}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={1.5} pb={5} mr={5.5}>
                                            <Typography variant="h4">
                                                {leaves === '' ? '' : leaves.left.annual}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', zIndex: -1 }} pt={4} pb={5} mr={4}>

                                            <Button href="/leave">
                                                <img src={Arrow} className={classes.imgsize} />
                                            </Button>
                                        </Box>

                                    </Grid>

                                </Grid>

                            </Box>
                        </Card>
                    </Box>

                    <Box pl={10} pr={20} mt={5}>
                        <Card classes={{ root: classes.payslipCardInfo }}>
                            <Box sx={{ display: 'flex' }} mt={5} ml={5} >
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography variant="h3" className={classes.bold_title}>
                                                Payslip
                                            </Typography>
                                            <Box pl={2}> 
                                                
                                                {isValid ? <Visibility sx={{ fontSize: 30 }} onClick = {() => {setsecret(true); setIsValid(false)}} /> :
                                                    <VisibilityOff sx={{ fontSize: 30 }} onClick={() => handleClickOpenPw()}/>                                                          
                                                }
                                                <Dialog open={openPw} onClose={handleClose}>
                                                        <DialogTitle>View</DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText>
                                                                To view the content of current payslip, please enter your password here.
                                                            </DialogContentText>

                                                            <TextField
                                                                autoFocus
                                                                margin="dense"
                                                                id="password"
                                                                name="password"
                                                                label="Password:"

                                                                fullWidth
                                                                variant="standard"
                                                                value={password}
                                                                onChange={(e) => { setPassword(e.target.value) }}
                                                                type={passwordShownNov ? "text" : "password"}
                                                                InputProps={{
                                                                    endAdornment:
                                                                        <IconButton
                                                                            aria-label='toggle password visibility'
                                                                            onClick={togglePassword}
                                                                        >
                                                                            {passwordShownNov ? <VisibilityOff /> : <Visibility />}
                                                                        </IconButton>,

                                                                }}
                                                            />
                                                            {Object.keys(passworderror).map((key) => {
                                                                return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                                                            })}
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose}>Cancel</Button>
                                                            <Button type="submit" onClick={onEnterPw} target="_blank" rel="noreferrer" >Enter</Button>
                                                        </DialogActions>
                                                    </Dialog>

                                            </Box>
                                        </Box>
                                        <Box pt={7} pb={1}>
                                            <Typography variant='h5'>
                                                Latest :
                                            </Typography>
                                        </Box>
                                        <Box pt={3} pb={1}>
                                            <Typography variant='h5'>
                                                Gross Pay :
                                            </Typography>
                                        </Box>
                                        <Box pt={3} pb={6}>
                                            <Typography variant='h5'>
                                                Deduction :
                                            </Typography>
                                        </Box>
                                        <Box pt={2} pb={5}>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box>
                                                    <Typography variant='h5'>
                                                        Net Pay :
                                                    </Typography>
                                                </Box>
                                                <Box pl={2}>
                                                    {secret ? <Typography variant="h5">
                                                        *****
                                                    </Typography> : <Typography variant="h5">
                                                        $5,320
                                                    </Typography>}
                                                </Box>
                                            </Box>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mr={5}>
                                            <Typography variant="h3" className={classes.bold_title}>
                                                2021
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={6} pb={2} mr={5.5} >
                                            <Typography variant="h4">
                                                November
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={1} pb={2} mr={5.5}>
                                            {secret === false ? <Typography variant="h4">
                                                $6,000
                                            </Typography> : <Typography variant="h4">
                                                *****
                                            </Typography>}
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={1} pb={3} mr={5.5}>
                                            {secret === false ? <Typography variant="h4">
                                                $680
                                            </Typography> : <Typography variant="h4">
                                                *****
                                            </Typography>}
                                        </Box>

                                        <Box sx={{ display: 'flex' }} ml={10}>


                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', }} pt={4} pb={5}>
                                                {/* BUTTON HERE */}
                                                <div>
                                                    <Button>
                                                        <DownloadForOfflineIcon sx={{ fontSize: 45, color: '#008BFF' }} onClick={handleClickOpenNov} ></DownloadForOfflineIcon>
                                                    </Button>
                                                    <Dialog open={openNov} onClose={handleClose}>
                                                        <DialogTitle>Download</DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText>
                                                                To download the November 2021 payslip, please enter your password here.
                                                            </DialogContentText>

                                                            <TextField
                                                                autoFocus
                                                                margin="dense"
                                                                id="password"
                                                                name="password"
                                                                label="Password:"

                                                                fullWidth
                                                                variant="standard"
                                                                value={password}
                                                                onChange={(e) => { setPassword(e.target.value) }}
                                                                type={passwordShownNov ? "text" : "password"}
                                                                InputProps={{
                                                                    endAdornment:
                                                                        <IconButton
                                                                            aria-label='toggle password visibility'
                                                                            onClick={togglePassword}
                                                                        >
                                                                            {passwordShownNov ? <VisibilityOff /> : <Visibility />}
                                                                        </IconButton>,

                                                                }}
                                                            />
                                                            {Object.keys(passworderror).map((key) => {
                                                                return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                                                            })}
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose}>Cancel</Button>
                                                            <Button type="submit" onClick={onSubmitNov} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </div>
                                            </Box>
                                        </Box>

                                    </Grid>

                                </Grid>
                            </Box>
                        </Card>
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: '1' }} pt={5} mb={10} >

                    <Calendar

                        value={selectedDay}
                        onChange={setSelectedDay}
                        shouldHighlightWeekends
                        calendarTodayClassName="custom-today-day" // also this
                        calendarClassName="responsive-calendar" // added this
                        customDaysClassName={calenval}
                    />

                    <Box >
                        <Card className={classes.leaveinfo}  >
                            <Box className={classes.infoheader} sx={{ display: 'flex' }} pt={2} >
                                <Box sx={{ display: 'flex' }}>
                                    <Box mt={7.5}>

                                        <Typography variant='h4'>
                                            {weekday[d.getDay()]}
                                        </Typography>
                                        <Typography variant='h6'>
                                            {month[months]} {day}
                                        </Typography>

                                    </Box>
                                    <Box ml={5} mt={3}>
                                        <Clock value={value} size={130} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ overflow: 'auto', height: '840px' }}>
                                <AppliedList items={applied} />
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Card>

        </Box>
    )
};

export default Home;