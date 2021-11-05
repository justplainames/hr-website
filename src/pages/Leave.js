import * as React from 'react';
import { useState } from 'react';
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
import {ThemeProvider} from "@mui/styles";
import {createTheme ,  responsiveFontSizes } from '@mui/material/styles';
// import React from "react";
import MUIDataTable from "mui-datatables";
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
//import {Form} from '@mui/material';

import axios from 'axios';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import OutlinedInput from '@mui/material/OutlinedInput';

//import TeamLeave from '../component/TeamLeave'

let theme = createTheme();
theme = responsiveFontSizes(theme);

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
const columns = [
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
["20/10/2021", "Annual", "02/11/2021","02/11/2021", 1, "Benjamin Tan", "Benjamin Tan","Pending"],
["20/10/2021", "Annual", "30/10/2021","30/10/2021", 1, "N.A.", "Benjamin Tan","Pending"],
["31/10/2021", "Unpaid", "02/08/2021","02/08/2021", 2, "Alice Tay", "Alison Ng","Approved"],

];

const options = {
filter: true,
filterType: "multiselect",
responsive: "scrollMaxHeight"
};

const dataLeaveRecord = [
    ["20/10/2021", "Annual", "02/11/2021","02/11/2021", 1, "Benjamin Tan", "Benjamin Tan","Pending"],
    ["20/10/2021", "Annual", "30/10/2021","30/10/2021", 1, "N.A.", "Benjamin Tan","Pending"],
    ["31/10/2021", "Unpaid", "02/08/2021","02/08/2021", 2, "Alice Tay", "Alison Ng","Approved"],
    ];
    
    const dataApproveLeave = [
        ["20/10/2021", "Annual", "02/11/2021","02/11/2021", 1, "Benjamin Tan", "Benjamin Tan","Pending"],
        ["20/10/2021", "Annual", "30/10/2021","30/10/2021", 1, "N.A.", "Benjamin Tan","Pending"],
        ["31/10/2021", "Unpaid", "02/08/2021","02/08/2021", 2, "Alice Tay", "Alison Ng","Pending"],
        ];
        
    
    const optionsLeaveRecord = {
    filter: true,
    filterType: "multiselect",
    responsive: "scrollMaxHeight",
    selectableRows: "none",
    download: false,
    print:false
    };
    
    
    const optionsApproveLeave = {
        filter: true,
        filterType: "multiselect",
        responsive: "scrollMaxHeight",
        //selectableRows: "none",
        download: false,
        print:false
        };
        
    
function getDifferenceInDays(dates) {
    const parseDates = dates => (
        dates.toString()
        .split(',')
        .filter(date => moment(date).isValid())
        .map(date => moment(date).format('MM/DD/YYYY'))
        .join(',')
      )
      //return  parseDates(dates)
    // const date1 = date.toString().split(',');
    
    const diffInMs = Math.abs(dates[1] -  dates[0]);
    const ans = Math.round(diffInMs / (1000 * 60 * 60 * 24)+1);

    return ans;
  }

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


export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [leave, setLeave] = React.useState('');
    const [day, setDay] = React.useState('');
    const [startdatevalue, startdatesetValue] = React.useState(null);
    const [enddatevalue, enddatesetValue] = React.useState(null);
    const [dateRangevalue, setDateRange] = React.useState([null, null]);
    const [rangevalue, setRange]= React.useState('');
    const [recommendbyvalue, setRecommendby] = React.useState('');
    const [approvebyvalue, setApproveby] = React.useState('');
    
    const [ptdvalue, setPtd] = React.useState('');
    const [ytdvalue, setYtd] = React.useState('');
    const [remarksvalue, setRemarks] = React.useState('');

    const [values, setValues] = React.useState({
        leavetype:'',
        day:{day},
        // startdate:'',
        // enddate:'',
        daterange:{dateRangevalue},
        recommendby:{recommendbyvalue},
        approveby:{approvebyvalue},
        remarks:{remarksvalue},
    });
    

    
    //for tab
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange1 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        
    };

    //for leave
    const handleChangeLeave = (event) => {
        setLeave(event.target.value);
    };
    
    //for day
    const handleChangeDay = (event) => {
    setDay(event.target.value);
    }

    //for date range
    const handleRange = (event) => {
        setRange(event.target.value);
        }

    //for recommendby
    const handleChangeRecommend = (event) => {
        setRecommendby(event.target.value);
        }

    
        //for approveby
    const handleChangeApprove = (event) => {
        setApproveby(event.target.value);
        }

      //for approveby
    const handleChangeRemark = (event) => {
        setRemarks(event.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (leave && day && dateRangevalue && recommendbyvalue && approvebyvalue &&ptdvalue&&ytdvalue&&remarksvalue) {
          console.log(leave, day, dateRangevalue, recommendbyvalue, approvebyvalue,ptdvalue,ytdvalue,remarksvalue)
        }{

            axios.post('http://localhost:5000/apply',
              {
                "type":leave,
                "from": getStartDate(dateRangevalue),
                "to": getEndDate(dateRangevalue),
                "days":  getDifferenceInDays(dateRangevalue),
                "daytype": day,
                "remarks": remarksvalue
              }).then(res => {
                localStorage.setItem("isAuthenticated", res._id)
                window.location.pathname = "/";
              })
              .catch(error => {
                console.error(error)
              })
    
            //if credentials wrong, prompt user for correct input
          }
      }

    

    

    return(
        <>
        
        <div id ="box1">
            <center>
                
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="My Leave" {...a11yProps(0)} />
                    <Tab label="Team Leave" {...a11yProps(1)} />
                    <Tab label="Leave Records" {...a11yProps(2)} />
                    <Tab label="Approve Leave" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                
                <TabPanel value={value} index={0}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div id ="box2">
                        {/* <div style = {{display: ,justifyContent:'left',alignItems: 'left'}}>  
                                                <h3>Apply Leave </h3></div> */}
                        <div id = "contentt"> 
                            <h1> Apply for Leave </h1></div>                         

                        <div id = "selectbox">
                        <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                                }}s
                                noValidate
                                
                                autoComplete="off"
                                >
                                     
                                    <div>    
                                        <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>Leave Type {leave} </h3>
                                        </div>
                                        <TextField
                                        required
                                        id="outlined-select-leavetype"
                                        select
                                        label="Select"
                                        value={leave}
                                        onChange={(e)=> setLeave(e.target.value)}
                                        // value={values.leavetype}
                                        // onChange={handleChange1('leavetype')}
                                        >
                                        {leavetypes.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                
                                    </div>
                                </Box>
                            </div>   


                            <div id = "radio"> 
                                <FormControl component="fieldset">
                                    {/* <FormLabel component="legend">Day</FormLabel> */}
                                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                        <h3>Day {day}</h3>
                                    </div>
                                    <RadioGroup 
                                        row aria-label="Day" 
                                        name="row-controlled-radio-buttons-group"
                                        value= {day}
                                        onChange={(e)=> setDay(e.target.value)}
                                        required>
                                        <FormControlLabel value="Full" control={<Radio />} label="Full" 
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 28,
                                            },
                                            }}/>
                                        <FormControlLabel value="AM" control={<Radio />} label="AM" 
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 28,
                                            },
                                            }}/>
                                        <FormControlLabel value="PM" control={<Radio />} label="PM" 
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 28,
                                            },
                                            }}/>
                                    </RadioGroup>
                                </FormControl>
                            </div>


                            {/* <div id = "startdate">
                                <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>Start Date  </h3>
                                        </div>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={startdatevalue}
                                        onChange={(newValue) => {
                                        startdatesetValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    </LocalizationProvider>
                            </div>

                            <div id = "enddate">
                                <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>End Date </h3>
                                        </div>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={enddatevalue}
                                        onChange={(newValue) => {
                                        enddatesetValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    </LocalizationProvider>
                            </div>

                            <FormControl sx={{ m: 1, width: '100ch' }} variant="outlined">
                                            
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

                            
                            <div id = "daterange">
                                <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>Start Date to End Date</h3>
                                    </div>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>  
                                    <Typography sx={{ mt: 1, mb: 1}}></Typography>
                                    <DesktopDateRangePicker
                                            required
                                            startText="Start Date"
                                            endText="End Date"
                                            value={dateRangevalue}
                                            onChange={(e) => {
                                                setDateRange(e);
                                            }}
                                            renderInput={(startProps, endProps) => (
                                                <React.Fragment>
                                            
                                                <TextField {...startProps} />
                                                <Box sx={{  mx: 2  }}> to </Box>
                                                <TextField {...endProps} />
                                                </React.Fragment>
                                            )}
                                            />
                                </LocalizationProvider>
                                </div>



                                <div id = "noofdays">
                                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                                <h3>No. of Days</h3>
                                        </div>
                                    <FormControl sx={{ m: 1, width: '12ch' }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        value={getDifferenceInDays(dateRangevalue)}
                                        //onChange={handleRange}
                                        // onChange={(newValue) => {
                                        //     setRange(newValue.getDays());
                                        // }}
                                        // onChange
                                        onChange={(e)=> setRange(e.target.value)}
                                        endAdornment={<InputAdornment position="end">Days </InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                                inputProps={{
                                                'aria-label': 'days',
                                                }}
                                            />
                                            </FormControl>
                                </div>


                                <div id = "recommendby">
                                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
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
                                            id="outlined-name"
                                            
                                            value={recommendbyvalue}
                                            onChange={(e)=> setRecommendby(e.target.value)}
                                        />
                                    </Box>
                                </div>

                                
                                
                                <div id = "approveby">
                                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
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
                                            id="outlined-name"
                                            value={approvebyvalue}
                                            onChange={(e)=> setApproveby(e.target.value)}
                                        />
                                    </Box>
                                </div>

                                <div id = "ptdbalance">
                                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
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
                                            value={ptdvalue}
                                            onChange={(e)=> setPtd(e.target.value)}
                                        />
                                    </Box>
                                </div>

                                <div id = "ytdbalance">
                                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
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
                                            value={ytdvalue}
                                            onChange={(e)=> setYtd(e.target.value)}
                                        />
                                    </Box>
                                </div>

                                <div id = "remarks">
                                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                                    <h3>Remarks:</h3>
                                    </div>
                                    <TextField
                                        //isRequired
                                        id="outlined-multiline-static"
                                        
                                        multiline
                                        rows={5}
                                        sx={{ m: 1, width: '70ch' }}
                                        value = {remarksvalue}
                                        onChange={(e)=> setRemarks(e.target.value)}
                                        />
                                </div>

                                <div id = "submitbutton">
                                        <Button 
                                            type ="submit" 
                                            variant="contained" 
                                            color="success" 
                                            size="large">
                                            {/* onClick={}> */}
                                            Submit
                                        </Button>
                                </div>

                    </div> 
                    </form>
               
                </TabPanel>

                <TabPanel value={value} index={1}>
                    
                    
                    {/* <TeamLeave /> */}
                </TabPanel>


                <TabPanel value={value} index={2}>
                    <ThemeProvider theme = {theme}>
                            <MUIDataTable
                                title={"Leave Records"}
                                data={dataLeaveRecord}
                                columns={columns}
                                options={optionsLeaveRecord}
                            />
                    </ThemeProvider>
                
                </TabPanel>
                
                <TabPanel value={value} index={3}>
                     <Stack direction="row" spacing={5}>
                        <Button variant="contained" color = "success"  size="large">Approve</Button>
                        <Button variant="contained" color = "error"  size="large">Decline</Button>
                    </Stack>
                    <ThemeProvider theme = {theme}>
                        <MUIDataTable
                            title={""}
                            
                            data={dataApproveLeave}
                            columns={columns}
                            options={optionsApproveLeave}
                        />
                    </ThemeProvider>
            
                </TabPanel>
                
            </center>
        </div>
    </>
  );
}
