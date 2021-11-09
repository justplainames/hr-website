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
import { Alert, AlertTitle } from '@mui/material';

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

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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

import Leaverecord from '../pages/LeaveRecord.js'
import Leaveapproval from '../pages/ApproveLeave.js'
import { DateTimePicker } from '@material-ui/pickers';

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
    return { ltype, left, entitlement, carryforward };
}

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
        label: 'Unpaid Infant Care Leave',
    },
];


const options = {
    filter: true,
    filterType: "multiselect",
    responsive: "scrollMaxHeight"
};



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
    const [loading, setLoading] = useState(false);


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
    const [disablefromloading, setdisablefromloading] = useState(false);
    const [calendar, setCalendar] = useState(new Date());
    const [isrecommended, setisrecommended] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [opac, setopac] = useState('1')
    const [mark2, setmark2] = useState([]);
    const [mark, setmark] = useState([]);
    const [datedisabled, setdatedisabled] = useState([])
    const [leaves,setleaves] = useState([])
    // disableSpecific(datef) {
    //     const dateRaw = [
    //     new Date(date.getFullYear(),0,1),
    //     new Date(date.getFullYear(),4,1)
    //     ];
        
    //     return dateRaw.includes(datef.getTime());
    //     }

    

    const fetchleaves = async (id) => {
        await axios.get('http://localhost:5000/leaves', {
            params: {
                id: id
            }
        })
            .then(res => {
                setleaves(res.data);
            })
    }

    const calendardetails = (data) => {

        for (var i = 0; i < data.length; i++) {
            var datecounter;

            for (var z = 0; z <= data[i].days; z++) {
                var find = '/';
                var re = new RegExp(find, 'g');
                var date = data[i].from.replace(re, '-');
                var dd;
                if (z === 0) {
                    if (data[i].types === 'annual') {
                        dd = new Date(date)
                        datecounter = dd
                        setmark(oldArray => [...oldArray, moment(datecounter).format('MM-DD-YYYY')]);
                      
                        setdatedisabled(oldArray => [...oldArray, new Date(datecounter)]);
                    }
                    else if (data[i].types === 'meeting') {
                        dd = new Date(date)
                        datecounter = dd
                        setmark2(oldArray => [...oldArray, moment(datecounter).format('MM-DD-YYYY')]);
                        setdatedisabled(oldArray => [...oldArray, new Date(datecounter)]);
                    }

                }
                else {

                    if (data[i].types === 'annual') {
                        var set = new Date(datecounter)
                        var set2 = set.setDate(set.getDate() + 1)
                        dd = new Date(set2)
                        datecounter = dd
                        setmark(oldArray => [...oldArray, moment(datecounter).format('MM-DD-YYYY')]);
                        setdatedisabled(oldArray => [...oldArray, new Date(datecounter)]);
                    }
                    else if (data[i].types === 'meeting') {
                        var set = new Date(datecounter)
                        var set2 = set.setDate(set.getDate() + 1)
                        dd = new Date(set2)
                        datecounter = dd
                        setmark2(oldArray => [...oldArray, moment(datecounter).format('MM-DD-YYYY')]);
                        setdatedisabled(oldArray => [...oldArray, new Date(datecounter)]);
                    }
                }

                if (z !== 0 && z == data[i].days - 1) {
                    break;
                }

            }

        }
      
    }

    const fetchapplied = (id) => {
        axios.get('http://localhost:5000/applied', {
            params: {
                id: id
            }
        })
            .then(res => {
                calendardetails(res.data.applies)
            })
    }


    useEffect(() => {
        const id = localStorage.getItem("isAuthenticated");
        fetchapplied(id)
    }, []);

    useEffect(() => {
        const id = localStorage.getItem("isAuthenticated");
        fetchleaves(id)
    }, []);


    // console.log(leaves.annual)

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



    const vali = (e) => {
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
        setopac('0.4')
        setLoading(true)
        setDisableFromNoti(true)
        setdisablefromloading(true)
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
                    "recomemdedby": formValues.recommendby,
                    "approvedby": formValues.approveby,
                    "approved": false
                }).then(res => {
                    if (isrecommended) {
                        axios.post('http://localhost:5000/acceptnoti', notificationprop).then(res => {
                            setOpen3(false)
                            setTimeout(() => {
                                setTimeout(() => {
                                    window.location.pathname = '/leave';
                                }, 1500);
                                setopac('1')
                                setLoading(false)
                                setIsSubmitted(true);
                            }, 2500);
                        })
                            .catch(error => {
                          
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
                            "recomemdedby": formValues.recommendby,
                            "approvedby": formValues.approveby,
                            "status": { "approved": false, "read": false, "accepted": "applied", "isrecommended": false }
                        }).then(res => {
                            setOpen3(false)
                            setTimeout(() => {
                                setTimeout(() => {
                                    window.location.pathname = '/leave';
                                }, 1500);
                                setopac('1')
                                setLoading(false)
                                setIsSubmitted(true);
                            }, 2500);

                        }).catch(error => {
               
                        })
                    }
                })
                .catch(error => {
         
                })

            //if credentials wrong, prompt user for correct input
        }

    }

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
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



    const handleClose = () => {
        setOpen3(false);
    };

    //for tab
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const [table, setTable] = useState([])

    const fetchTable = async () => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        await axios.get('http://localhost:5000/leaves', {
            params: {
                id: isAuthenticated
            }
        })
            .then(res => {
                setTable(res.data);
            })
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetchTable()
        }
    }, []);

    

    const rows = [
        createData('Adoption Leave', leaves.left.adoption,leaves.adoption, leaves.carryforward.adoption),
        createData('Annual Leave', leaves.left.annual,leaves.annual, leaves.carryforward.annual),
        createData('Childcare Leave', leaves.left.childcare,leaves.childcare, leaves.carryforward.childcare),
        createData('Maternity Leave', leaves.left.maternity,leaves.maternity, leaves.carryforward.maternity),
        createData('Paternity Leave', leaves.left.paternity,leaves.paternity, leaves.carryforward.paternity),
        createData('Shared Parental Leave',leaves.left.sharedparental,leaves.sharedparental, leaves.carryforward.sharedparental),
        createData('Sick Leave', leaves.left.sickleave,leaves.sickleave, leaves.carryforward.sickleave),
        createData('Unpaid Infant Care Leave',leaves.left.infantcare,leaves.infantcare, leaves.carryforward.infantcare),
    ];
    
    function ptd(leave){
        if (leave === "Adoption Leave"){
            var num = (leaves.adoption *11/12)
            return num.toFixed(2);
        }
        else if (leave === "Annual Leave"){
            var num = (leaves.annual *11/12)
            return num.toFixed(2);
        }
        else if (leave === "Childcare Leave"){
            var num = (leaves.childcare *11/12)
            return num.toFixed(2);
        }
        else if (leave === "Maternity Leave"){
            var num = (leaves.maternity *11/12)
            return num.toFixed(2);
        }
        else if (leave === "Paternity Leave"){
            var num = (leaves.paternity *11/12)
            return num.toFixed(2);
        }
        else if (leave === "Shared Parental Leave"){
            var num = (leaves.sharedparental *11/12)
            return num.toFixed(2);
        }
        else if (leave === "Sick Leave"){
            var num = (leaves.sickleave *11/12)
            return num.toFixed(2);
        }
        else if (leave === "Unpaid Infant Care Leave"){
            var num = (leaves.infantcare *11/12)
            return num.toFixed(2);
        }
    }

    return (

        <Box pt={1} style={{ opacity: opac }}>
            <Dialog
                open={open3}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogTitle id="alert-dialog-title">
                    {"Confirm"}
                </DialogTitle>
                <DialogContent>

                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to submit?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleSubmit} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>

            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2000
            }}>
                {isSubmitted ? <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    You have applied successfully! — <strong>check it out!</strong>
                </Alert> :
                    false}
            </div>

            <div id="box1">
                <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <FadeLoader color={"black"} loading={loading} css={override} size={10} />
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
                                                    return 'highlight1'
                                                }
                                                if (mark2.find(x => x === moment(date).format("MM-DD-YYYY"))) {
                                                    return 'highlight2'
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
                                                        <StyledTableCell align="right"> Carry Forward</StyledTableCell>

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
                                                            disablePast
                                                            startText="Start Date"
                                                            endText="End Date"
                                                            disabled={disablefromnoti}
                                                            name="daterange"
                                                            shouldDisableDate={(date)=>{
                                                                if (datedisabled.find(x => x.getTime() ===date.getTime())){
                                                                  return date
                                                                }
                                                            }}
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
                                                            disabled
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
                                                            disabled={disablefromloading}
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
                                                            disabled={disablefromloading}
                                                            id="outlined-name"
                                                            name="ptdvalue"
                                                            value={ptd(formValues.leavetype)}
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
                                                            disabled={disablefromloading}
                                                            id="outlined-name"
                                                            name="ytdvalue"
                                                            value={ptd(formValues.leavetype)}
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
                                                        disabled={disablefromloading}
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
                                                        disabled={disablefromloading}
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
                        <div style={{ display: 'table', tableLayout: 'fixed', width: '90%' }}>
                            <br />
                            <Leaverecord />
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
