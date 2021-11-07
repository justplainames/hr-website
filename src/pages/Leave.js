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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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


let theme = createTheme();
theme = responsiveFontSizes(theme);


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
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),


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

//columns for leave records
const columnsforApprove = [
    {
        name: "Name of Applicant",
        options: {
            filter: true,
        }
    },
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
    {
        name: "Approve",
        options: {
            filter: true
        }
    },
    {
        name: "Reject",
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

//   function getDifferenceInDays1(date1,date2) {
//     //var date1 = date.toString().split(',');
//     const diffInMs = Math.abs(date2 -  date1);

//     return date1//Math.round(diffInMs / (1000 * 60 * 60 * 24));
//   }


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

function split(value) {
    return value.toString().split(',')
}

export default function BasicTabs() {
    const location = useLocation()
    const [value, setValue] = React.useState(0);
    // const [leave, setLeave] = React.useState('');
    // const [day, setDay] = React.useState('');
    // const [startdatevalue, startdatesetValue] = React.useState(null);
    // const [enddatevalue, enddatesetValue] = React.useState(null);

    // const [rangevalue, setRange]= React.useState('');
    // const [recommendbyvalue, setRecommendby] = React.useState('');
    // const [approvebyvalue, setApproveby] = React.useState('');

    // const [ptdvalue, setPtd] = React.useState('');
    // const [ytdvalue, setYtd] = React.useState('');
    // const [remarksvalue, setRemarks] = React.useState('');

    // const initialValues={leavetype:'',
    //   day:'',
    //   // startdate:'',
    //   // enddate:'',
    //   daterange:[null, null],
    //   noofdays:'',
    //   recommendby:'',
    //   approveby:'',
    //   ptdvalue:'',
    //   ytdvalue:'',
    //   remarks:''};
    // const [formValues, setFormValues] = React.useState(initialValues);
    const [daterange, setDateRange] = React.useState([Date(), Date()]);
    const [startdate, startdatesetValue] = React.useState(Date());
    const [enddate, enddatesetValue] = React.useState(Date());
    const [formErrors, setFormErrors] = React.useState({});
    const [isSubmit, setIsSubmit] = React.useState(false);

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


    const [notificationprop, setNotificationProp] = useState();
    const [disablefromnoti, setDisableFromNoti] = useState(false);
    const [calendar, setCalendar] = useState(new Date());
    const [isrecommended, setisrecommended] = useState(false);

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




    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    //   const handleChanges = (prop) => (event) => {
    //     setFormValues({ ...formValues, [prop]: event.target.value });

    // };

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
                            window.location.pathname = '/'
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


    //for tab
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //     const handleChange1 = (prop) => (event) => {
    //         setValues({ ...values, [prop]: event.target.value });

    //     };

    //     //for leave
    //     const handleChangeLeave = (event) => {
    //         setLeave(event.target.value);
    //     };

    //     //for day
    //     const handleChangeDay = (event) => {
    //     setDay(event.target.value);
    //     }

    //     //for date range
    //     const handleRange = (event) => {
    //         setRange(event.target.value);
    //         }

    //     //for recommendby
    //     const handleChangeRecommend = (event) => {
    //         setRecommendby(event.target.value);
    //         }


    //         //for approveby
    //     const handleChangeApprove = (event) => {
    //         setApproveby(event.target.value);
    //         }

    //       //for approveby
    //     const handleChangeRemark = (event) => {
    //         setRemarks(event.target.value);
    //     }

    //     const validateee = () => {
    //       let temp={}
    //       temp.leave = leave?"":"This field is required"
    //       temp.remarksvalue = remarksvalue?"":"This field is required"
    //       setErrors({
    //         ...temp
    //       })
    //       return Object.values(temp).every(x => x =="")
    //   }

    // const handleSubmittt = (e) => {
    //     e.preventDefault()
    //     if (validate())
    //     window.alert('test...')
    //     if (leave && day && dateRangevalue && recommendbyvalue && approvebyvalue &&ptdvalue&&ytdvalue&&remarksvalue) {
    //       console.log(leave, day, dateRangevalue, recommendbyvalue, approvebyvalue,ptdvalue,ytdvalue,remarksvalue)
    //     }{

    //         axios.post('http://localhost:5000/apply',
    //           {
    //             "type":leave,
    //             // "from": getStartDate(dateRangevalue),
    //             // "to": getEndDate(dateRangevalue),
    //             "from": startdate,
    //             "to":enddate,
    //             "days":  getDifferenceInDays(dateRangevalue),
    //             "daytype": day,
    //             "remarks": remarksvalue
    //           }).then(res => {
    //             localStorage.setItem("isAuthenticated", res._id)
    //             window.location.pathname = "/";
    //           })
    //           .catch(error => {
    //             console.error(error)
    //           })

    //         //if credentials wrong, prompt user for correct input
    //       }
    //   }

    
    const optionsLeaveRecord = {
        filter: true,
        filterType: "multiselect",
        responsive: "scrollMaxHeight",
        selectableRows: "none",
        download: false,
        print: false,
        fixedHeader:false,
    };

    const onRowClick = (rowData, rowState) => {
        console.log(rowData, rowState);
     };

    const handleRowClick = (rowData, rowMeta) => {
        console.log(rowData, rowMeta);
     };

    const [selectedRows, setSelectedRows] = useState([]);
    
    const optionsApproveLeave = {
        filter: true,
        filterType: "checkbox",
        responsive: "scrollMaxHeight",
        //selectableRows: "none",
        download: false,
        print: false,
        fixedHeader:false,
    //     rowsSelected: selectedRows,
    //     onRowSelectionChange: (rowsSelectedData, allRows, rowsSelected) => {
    //     setSelectedRows(rowsSelected);
    // },
        customToolbar: () => (
            <customToolbar
            selectedRows={selectedRows}
            onRowsDelete={() => {
                //deleteSelected();
                setSelectedRows([]);
            } }
            />
        ),
     };
        
        // onRowSelected: handleRowClick,
        // onRowsDelete: (rowData, rowState) => {
        //     handleDeleteCat(rowData, rowState);
        //     },
    //     onRowsDelete: (rowsDeleted, dataRows) => {
    //         const idsToDelete = dataRows.map(d => data[d.dataIndex].id); // array of all ids to to be deleted
    //         http.delete(idsToDelete, res).then(window.alert('Deleted!'));//onRowsDelete:(e)=>{console.log(e.data)},
    // }


    const handleDelete = () => {
        this.props.onRowsDelete();
      };
    
      
    const dataApproveLeave = [
        ["Mary Tan","20/10/2021", "Annual", "02/11/2021", "02/11/2021", 1, "Benjamin Tan", "Benjamin Tan", "Pending",
            <Button variant="contained" color="success" size="large" onClick={handleDelete} >Approve</Button>,
            <Button variant="contained" color="error" size="large" >Reject</Button>
            ],
        ["Ben Ong","20/10/2021", "Annual", "30/10/2021", "30/10/2021", 1, "N.A.", "Benjamin Tan", "Pending",
        <Button variant="contained" color="success" size="large">Approve</Button>,
        <Button variant="contained" color="error" size="large">Reject</Button>],
        ["Mary Tan","31/10/2021", "Unpaid", "02/08/2021", "02/08/2021", 2, "Alice Tay", "Alison Ng", "Pending",
        <Button variant="contained" color="success" size="large">Approve</Button>,
        <Button variant="contained" color="error" size="large">Reject</Button>],
    ];

    return (

        <Box pt={1}>
            <div id="box1">
                <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', width: '1600px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30px 30px 0px 0px' }}>
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
                                                        <StyledTableRow key={row.name}>
                                                            <StyledTableCell sx={{ width: '160px' }} component="th" scope="row">
                                                                {row.name}
                                                            </StyledTableCell>
                                                            <StyledTableCell sx={{ paddingLeft: '30px' }} align="right">{row.calories}</StyledTableCell>
                                                            <StyledTableCell sx={{ paddingLeft: '60px' }} align="right">{row.fat}</StyledTableCell>
                                                            <StyledTableCell sx={{ paddingLeft: '110px', paddingRight: '48px' }} align="right">{row.carbs}</StyledTableCell>

                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </Grid>
                                <Grid item xs={7.5}>
                                    <Box>
                                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                                            <div id="box2">
                                                {/* <div style = {{display: ,justifyContent:'left',alignItems: 'left'}}>  
                                                <h3>Apply Leave </h3></div> */}
                                                <div id="contentt">
                                                    <h1> Apply for Leave </h1></div>

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
                                                                <h3>Leave Type </h3>
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
                                                            <h3>Day</h3>
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



                                                {/* <FormControl sx={{ m: 1, width: '100ch' }} variant="outlined">
                                            
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={enddatevalue}
                                    //onChange={handleRange}
                                    // onChange={(newValue) => {
                                    //     setRange(newValue.getDays());
                                    // }}
                                    // onChange
                                    endAdornment={<InputAdornment position="end">Days </InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'days',
                                    }}
                                />
                                </FormControl> */}



                                                <div id="daterange">
                                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                        <h3>Start Date to End Date</h3>
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
                                                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                    selected={formValues.startdate}
                                    onChange={handleChanges}
                                    selectsStart
                                    startDate={formValues.startdate}
                                    endDate={formValues.enddate}
                                  />
                                  <DatePicker
                                    selected={formValues.enddate}
                                    onChange={handleChanges}
                                    selectsEnd
                                    startDate={formValues.startdate}
                                    endDate={formValues.enddate}
                                    minDate={formValues.startdate}/>
                                // {/* <p> {formErrors.daterange}</p> 
                                </LocalizationProvider> */}

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
                                                        <h3>To be approved by:</h3>
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
                        <ThemeProvider theme={theme}>
                            {/* <div> 
                                <Stack direction="row" spacing={5}>
                            <Button variant="contained" color="success" size="large">Approve</Button>
                            <Button variant="contained" color="error" size="large">Decline</Button>
                                </Stack> </div> */}
                            <MUIDataTable
                                title={""}

                                data={dataApproveLeave}
                                columns={columnsforApprove}
                                options={optionsApproveLeave}
                            />
                        </ThemeProvider>
                        </div>

                    </TabPanel>

                </center>
            </div>

        </Box>

    );
}
