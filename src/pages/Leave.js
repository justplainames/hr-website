import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../Leave.css";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

//LOADER FUYNCTION
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';

import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import React from "react";
import MUIDataTable from "mui-datatables";
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
//import {Form} from '@mui/material';
import { useLocation } from 'react-router-dom'
import { stringconversionrevert, stringconversion } from '../utils/conversion'
import axios from 'axios';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OutlinedInput from '@mui/material/OutlinedInput';
//import table here
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TeamLeave from '../component/teamLeave/TeamLeave'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import Leaveapproval from '../pages/ApproveLeave.js'

let theme = createTheme();
theme = responsiveFontSizes(theme);


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },

}));
function createData(ltype, left, entitlement, carryforward) {
    return {ltype, left, entitlement, carryforward };
}

const rows = [
    createData('Adoption Leave', 159, 6.0, 24),
    createData('Annual Leave', 237, 9.0, 37),
    createData('Childcare Leave', 262, 16.0, 24),
    createData('Maternity Leave', 305, 3.7, 67),
    createData('Parental Leave', 356, 16.0, 49),
    createData('Shared Parental Leave', 356, 16.0, 49),
    createData('Sick Leave', 356, 16.0, 49),
    createData('Unpaid Infant Care Parental', 356, 16.0, 49),


];

// leave types for my leave select leave type
const leavetypes = [
    {
        value: 'Adoption Leave',
        label: 'Adoption Leave',
    },
    {
        value: 'Annual Leave',
        label: 'Annual Leave',
    },
    {
        value: 'Childcare Leave',
        label: 'Childcare Leave',
    },
    {
        value: 'Maternity Leave',
        label: 'Maternity Leave',
    },
    {
        value: 'Paternity Leave',
        label: 'Paternity Leave',
    },
    {
        value: 'Shared Parental Leave',
        label: 'Shared Parental Leave',
    },
    {
        value: 'Sick Leave',
        label: 'Sick Leave',
    },
    {
        value: 'Unpaid Infant Care Leave',
        label: 'Unpaid Infant Care Parental',
    },
];

//columns for leave records
const columnsforRecord = [
    {
        name: "Date of Application",
        options: {
            filter: true,
        }
    },
    {
        label: "Type",
        name: "Title",
        options: {
            filter: true
        }
    },
    {
        name: "Start Date",
        options: {
            filter: true
        }
    },
    {
        name: "End Date",
        options: {
            filter: true
        }
    },
    {
        name: "Days Applied",
        options: {
            filter: true
        }
    },
    {
        name: "Recommender",
        options: {
            filter: true
        }
    },
    {
        name: "Approver",
        options: {
            filter: true
        }
    },
    {
        name: "Status",
        options: {
            filter: true
        }
    },
];



const data = [
    ["20/10/2021", "Annual", "02/11/2021", "02/11/2021", 1, "Benjamin Tan", "Benjamin Tan", "Pending"],
    ["20/10/2021", "Annual", "30/10/2021", "30/10/2021", 1, "N.A.", "Benjamin Tan", "Pending"],
    ["31/10/2021", "Unpaid", "02/08/2021", "02/08/2021", 2, "Alice Tay", "Alison Ng", "Approved"],

];

const options = {
    filter: true,
    filterType: "multiselect",
    responsive: "scrollMaxHeight"
};

const dataLeaveRecord = [
    ["20/10/2021", "Annual", "02/11/2021", "02/11/2021", 1, "Benjamin Tan", "Benjamin Tan", "Pending"],
    ["20/10/2021", "Annual", "30/10/2021", "30/10/2021", 1, "N.A.", "Benjamin Tan", "Pending"],
    ["31/10/2021", "Unpaid", "02/08/2021", "02/08/2021", 2, "Alice Tay", "Alison Ng", "Approved"],
];





function getDifferenceInDays(dates) {
    const parseDates = dates => (
        dates.toString()
            .split(',')
            .filter(date => moment(date).isValid())
            .map(date => moment(date).format('MM/DD/YYYY'))
            .join(',')
    )
    if (isNaN(((Math.abs(dates[1] - dates[0])) / (1000 * 60 * 60 * 24)) + 1)) {
        return "1"
    }
    else {
        return (((Math.abs(dates[1] - dates[0])) / (1000 * 60 * 60 * 24)) + 1);
    }
    //const days = 

}


const yourDate = new Date()
const TodayDate = moment(yourDate, 'MM-DD-YYYY')

function getStartDate(dates) {
    const parseDates = dates => (
        dates.toString()
            .split(',')
            .filter(date => moment(date).isValid())
            .map(date => moment(date).format('MM/DD/YYYY'))
            .join(',')
    )
    return parseDates(dates[0]);
}

function getEndDate(dates) {
    const parseDates = dates => (
        dates.toString()
            .split(',')
            .filter(date => moment(date).isValid())
            .map(date => moment(date).format('MM/DD/YYYY'))
            .join(',')
    )
    return parseDates(dates[1]);
}


// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// function deleteSelectedRow(selectedRows) {
//     // Collect all row indicies from selected rows.
//     const indexesToDelete = selectedRows.data.map((row, k) => row.dataIndex);
//    // Create a temp list and insert data that are not in selected rows.
//     let temp = [];
//     for (var i = 0; i < data.length; i++) {
//       if (!indexesToDelete.includes(i)) {
//         temp.push(tableData[i]);
//       }
//     }
//     // Set table 
//     setTableData(temp);
//  }



export default function BasicTabs() {
    const location = useLocation()
    const [value, setValue] = React.useState(0);
    const [daterange, setDateRange] = React.useState([Date(), Date()]);
    const [startdate, startdatesetValue] = React.useState(Date());
    const [enddate, enddatesetValue] = React.useState(Date());
    const [formErrors, setFormErrors] = React.useState({});
    const [isSubmit, setIsSubmit] = React.useState(false);

    //LOADER CONTROLLER
    let [loading, setLoading] = useState(true);


    const [formValues, setFormValues] = React.useState({
        leavetype: '',
        day: '',
        // startdate: Date(),
        // enddate: '',
        //daterange:[null, null],
        noofdays: '',
        recommendby: '',
        approveby: '',
        ptdvalue: '',
        ytdvalue: '',
        remarks: '',
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const [notificationprop, setNotificationProp] = useState();
    const [disablefromnoti, setDisableFromNoti] = useState(false);
    const [calendar, setCalendar] = useState(new Date());
    const [isrecommended, setisrecommended] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [open3, setOpen3] = useState(false);
    useEffect(() => {
        const from = location.state

        const fixedformvalue = {
            leavetype: '',
            day: '',
            // startdate: Date(),
            // enddate: '',
            //daterange:[null, null],
            noofdays: '',
            recommendby: '',
            approveby: '',
            ptdvalue: '',
            ytdvalue: '',
            remarks: '',
        }

        if (from) {
            setNotificationProp(from)
            setDisableFromNoti(true)
            const test = [new Date(from.from), new Date(from.to)]
            setDateRange(test)
            setisrecommended(true)
            fixedformvalue.leavetype = stringconversionrevert(from.types)

            if (from.days > 0) {
                fixedformvalue.day = "Full"
            }

            fixedformvalue.recommendby = from.requester.name
            fixedformvalue.approveby = from.requester.name
            setFormValues(fixedformvalue)
        }
    }, [notificationprop]);



    const vali =(e)=>{
        e.preventDefault(); 
        if (!(formValues.leavetype && formValues.day && formValues.approveby)) {
            setFormErrors(validate(formValues));  
        }
        else {
            setOpen3(true)
        }
    }


    const handleSubmit = (e) => {
        const id = localStorage.getItem("isAuthenticated");
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if (!(formValues.leavetype && formValues.day && formValues.approveby)) {
            alert('Please input Empty fields')
        }
        else {
            axios.post('http://localhost:5000/apply',
                {
                    "userId": id,
                    "types": stringconversion(formValues.leavetype),
                    "from": getStartDate(daterange),
                    "to": getEndDate(daterange),
                    "days": getDifferenceInDays(daterange), //getDifferenceInDays(formValues.daterange),
                    "daytype": formValues.day,
                    "remarks": formValues.remarks === '' ? 'nil' : formValues.remarks,
                    "recomemdedby":formValues.recommendby,
                    "approvedby":formValues.approveby,
                    "approved":false
                }).then(res => {
                    if (isrecommended) {
                        axios.post('http://localhost:5000/acceptnoti', notificationprop).then(res => {
                            console.log("done with updatding leave recods , add applied leave to database and updated the notification")
                            console.log("you may do a pop up notification here SUCH AS MUI BASIC ALERT")
                            //then do a return to home page here
                            window.location.pathname = '/'
                        })
                            .catch(error => {
                                console.log(error)
                            })
                    }
                    else {
                        axios.post('http://localhost:5000/createnoti', {
                            "userId": id,
                            "types": stringconversion(formValues.leavetype),
                            "requester": { "id": "", "name": "" },
                            "days": getDifferenceInDays(daterange),
                            "from": getStartDate(daterange),
                            "to": getEndDate(daterange),
                            "daytype": formValues.day,
                            "remarks": formValues.remarks === '' ? 'nil' : formValues.remarks,
                            "requestedon": TodayDate,
                            "recomemdedby":formValues.recommendby,
                            "approvedby":formValues.approveby,
                            "status": { "approved": false, "read": false, "accepted": "applied", "isrecommended": false }
                        }).then(res => {
                            console.log(res)
                            setOpen3(false)
                            setIsSubmitted(true);
                            setTimeout(() => {
                                window.location.pathname = '/leave';
                            },2000);
    
                        }).catch(error => {
                            console.log(error)
                        })
                    }
                })
                .catch(error => {
                    console.error(error)
                })

            //if credentials wrong, prompt user for correct input
        }

    }

    useEffect(() => {

        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);


    const validate = (values) => {
        const errors = {}
        if (!values.leavetype) {
            errors.leavetype = "Leave Type is required!";
        }
        if (!values.day) {
            errors.day = "Day Type is required!";
        }
        //   if(!values.startdate){
        //     errors.startdate="Start Date is required!";
        //   }
        //   if(!values.enddate){
        //     errors.enddate="End Date is required!";
        //   }
        if (!values.approveby) {
            errors.approveby = "Approved by Name is required!";
        }

        return errors;
    };


    const mark = [
        '11-04-2021',
        '11-05-2021',
        '11-06-2021'
    ]


    const handleClose = () => {
        console.log("its open ")
        setOpen3(false);
      };

    //for tab
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    const optionsLeaveRecord = {
        filter: true,
        filterType: "multiselect",
        responsive: "scrollMaxHeight",
        selectableRows: "none",
        download: false,
        print: false,
        fixedHeader:false,
    };

    //style={{backgroundColor:'gray',opacity:'0.6'}}
    return (

        <Box pt={1}>
        <Dialog
                open={open3}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleSubmit} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>



            <div id="box1">
              <div style = { {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"} }>
            {/* <FadeLoader  color={"black"} loading={loading} css={override} size={10} /> */}
            </div>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30px 30px 0px 0px' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="My Leave" {...a11yProps(0)} />
                        <Tab label="Team Leave" {...a11yProps(1)} />
                        <Tab label="Leave Records" {...a11yProps(2)} />
                        <Tab label="Approve Leave" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <center>
                    <TabPanel value={value} index={0}>
                        {/* <pre>{JSON.stringify(formValues)}</pre> */}
                        <Box>
                            <Grid container>
                                <Grid item xs={4.5}>
                                    <Box pt={11.5}>
                                        <Calendar
                                            onChange={setCalendar}
                                            value={calendar}
                                            tileClassName={({ date, view }) => {
                                                if (mark.find(x => x === moment(date).format("MM-DD-YYYY"))) {
                                                    return 'highlight'
                                                }
                                            }}
                                        />
                                    </Box>
                                    <Box pt={4} sx={{ width: '500px' }}>
                                        <TableContainer component={Paper} sx={{ borderRadius: '30px', width: '500px' }}>
                                            <Table sx={{ width: '500px', maxHeight: '415px', height: '415px' }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell sx={{ width: '160px' }}>Type</StyledTableCell>
                                                        <StyledTableCell align="right">Left</StyledTableCell>
                                                        <StyledTableCell align="right">Entitlement</StyledTableCell>
                                                        <StyledTableCell align="right">CarryForward</StyledTableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody sx={{ height: '360px', position: 'absolute', overflowY: 'scroll', borderRadius: '0px 0px 20px 20px', width: '500px' }}>
                                                    {rows.map((row) => (
                                                        <StyledTableRow key={row.ltype}>
                                                            <StyledTableCell sx={{ width: '160px' }} component="th" scope="row">
                                                                {row.ltype}
                                                            </StyledTableCell>
                                                            <StyledTableCell sx={{ paddingLeft: '30px' }} align="right">{row.left}</StyledTableCell>
                                                            <StyledTableCell sx={{ paddingLeft: '60px' }} align="right">{row.entitlement}</StyledTableCell>
                                                            <StyledTableCell sx={{ paddingLeft: '110px', paddingRight: '48px' }} align="right">{row.carryforward}</StyledTableCell>

                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </Grid>
                                <Grid item xs={7.5}>
                                    <Box> 
                                        <div id="contentt">
                                                    <h1> Apply for Leave </h1> </div>

                                        <form noValidate autoComplete="off" onSubmit={vali}>
                                            <div id="box2">
                                                {/* <div style = {{display: ,justifyContent:'left',alignItems: 'left'}}>  
                                                <h3>Apply Leave </h3></div> */}
                                               
                                                
                                               

                                                <div id="selectbox">
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& .MuiTextField-root': { m: 1, width: '30ch' },
                                                        }} s
                                                        noValidate

                                                        autoComplete="off"
                                                    >

                                                        <div>
                                                            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                                <h3>Leave Type* </h3>
                                                            </div>
                                                            <TextField
                                                                required
                                                                disabled={disablefromnoti}
                                                                id="outlined-select-leavetype"
                                                                select
                                                                label="Select"
                                                                name="leavetype"
                                                                value={formValues.leavetype}
                                                                //onChange={(e)=> setLeave(e.target.value)}
                                                                // value={values.leavetype}
                                                                onChange={handleChanges}
                                                            >
                                                                {leavetypes.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>

                                                        </div>
                                                    </Box>
                                                    <div> <p style={{ color: "red" }}> {formErrors.leavetype}</p> </div>
                                                </div>



                                                <div id="radio">
                                                    <FormControl component="fieldset">
                                                        {/* <FormLabel component="legend">Day</FormLabel> */}
                                                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                            <h3>Day*</h3>
                                                        </div>
                                                        <RadioGroup
                                                            row aria-label="Day"
                                                            name="day"
                                                            value={formValues.day}
                                                            onChange={handleChanges}
                                                            required>
                                                            <FormControlLabel value="Full" disabled={disablefromnoti} control={<Radio />} label="Full"
                                                                sx={{
                                                                    '& .MuiSvgIcon-root': {
                                                                        fontSize: 28,
                                                                    },
                                                                }} />
                                                            <FormControlLabel disabled={disablefromnoti} value="AM" control={<Radio />} label="AM"
                                                                sx={{
                                                                    '& .MuiSvgIcon-root': {
                                                                        fontSize: 28,
                                                                    },
                                                                }} />
                                                            <FormControlLabel disabled={disablefromnoti} value="PM" control={<Radio />} label="PM"
                                                                sx={{
                                                                    '& .MuiSvgIcon-root': {
                                                                        fontSize: 28,
                                                                    },
                                                                }} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <div> <p style={{ color: "red" }} > {formErrors.day}</p> </div>
                                                </div>


                                                <div id="daterange">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>Start Date to End Date*</h3>
                                                    </div>
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <Typography sx={{ mt: 1, mb: 1 }}></Typography>
                                                        <DesktopDateRangePicker
                                                            required
                                                            startText="Start Date"
                                                            endText="End Date"
                                                            disabled={disablefromnoti}
                                                            name="daterange"
                                                            value={daterange}
                                                            onChange={(e) => setDateRange(e)}
                                                            renderInput={(startProps, endProps) => (
                                                                <React.Fragment>

                                                                    <TextField {...startProps} />
                                                                    <Box sx={{ mx: 2 }}> to </Box>
                                                                    <TextField {...endProps} />
                                                                </React.Fragment>
                                                            )}
                                                        />
                                                    </LocalizationProvider>
                                                </div>


                                                <div id="noofdays">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>No. of Days</h3>
                                                    </div>
                                                    <FormControl sx={{ m: 1, width: '13ch' }} variant="outlined">

                                                        <OutlinedInput
                                                            id="outlined-adornment-weight"

                                                            value={getDifferenceInDays(daterange)}
                                                            disabled={disablefromnoti}
                                                            // your code here.

                                                            //onChange={handleRange}
                                                            // onChange={(newValue) => {
                                                            //     setRange(newValue.getDays());
                                                            // }}
                                                            // onChange
                                                            // onChange={handleChanges}
                                                            endAdornment={<InputAdornment position="end">Days </InputAdornment>}
                                                            aria-describedby="outlined-weight-helper-text"
                                                            inputProps={{
                                                                'aria-label': 'days',
                                                            }}
                                                        />
                                                    </FormControl>

                                                </div>


                                                <div id="recommendby">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>Recommended by:</h3>
                                                    </div>
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1, width: '30ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField
                                                            disabled={disablefromnoti}
                                                            id="outlined-name"
                                                            name="recommendby"
                                                            value={formValues.recommendby}
                                                            onChange={handleChanges}
                                                        />
                                                    </Box>
                                                </div>



                                                <div id="approveby">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>To be approved by:*</h3>
                                                    </div>
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1, width: '30ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField
                                                            disabled={disablefromnoti}
                                                            id="outlined-name"
                                                            name="approveby"
                                                            value={formValues.approveby}
                                                            onChange={handleChanges}
                                                        />
                                                    </Box>
                                                    <div> <p style={{ color: "red" }}> {formErrors.approveby}</p> </div>
                                                </div>

                                                <div id="ptdbalance">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>PTD Balance</h3>
                                                    </div>
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1, width: '30ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField
                                                            disabled={disablefromnoti}
                                                            id="outlined-name"
                                                            name="ptdvalue"
                                                            value={formValues.ptdvalue}
                                                            onChange={handleChanges}
                                                        />
                                                    </Box>
                                                </div>

                                                <div id="ytdbalance">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>YTD Balance</h3>
                                                    </div>
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1, width: '30ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField
                                                            disabled={disablefromnoti}
                                                            id="outlined-name"
                                                            name="ytdvalue"
                                                            value={formValues.ytdvalue}
                                                            onChange={handleChanges}
                                                        />
                                                    </Box>
                                                </div>

                                                <div id="remarks">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>Remarks:</h3>
                                                    </div>
                                                    <TextField
                                                        //isRequired
                                                        id="outlined-multiline-static"
                                                        disabled={disablefromnoti}
                                                        multiline
                                                        rows={5}
                                                        sx={{ m: 1, width: '70ch' }}
                                                        name="remarks"
                                                        value={formValues.remarks}
                                                        onChange={handleChanges}
                                                    />
                                                </div>

                                                <div id="submitbutton">
                                                    <Button
                                                        disabled={disablefromnoti}
                                                        type="submit"
                                                        variant="contained"
                                                        color="success"
                                                        size="large">
                                                        {/* onClick={}> */}
                                                        Submit
                                                    </Button>
                                                </div>

                                            </div>
                                        </form>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <TeamLeave />
                    </TabPanel>


                    <TabPanel value={value} index={2}>
                        <div style={{display:'table',tableLayout:'fixed',width:'90%'}}>
                            <br />
                        <ThemeProvider theme={theme}>
                            <MUIDataTable
                                title={"Leave Records"}
                                data={dataLeaveRecord}
                                columns={columnsforRecord}
                                options={optionsLeaveRecord}
                            />
                        </ThemeProvider>
                        </div>

                    </TabPanel>

                    <TabPanel value={value} index={3}>
                         <div style={{ display: 'table', tableLayout: 'fixed', width: '90%' }}>
                            <br />

                            <Leaveapproval />
                       
                        </div>
                    </TabPanel>

                </center>
            </div>

        </Box>

    );
}
