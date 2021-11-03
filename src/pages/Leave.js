
//npm i @emotion/styled
//npm i @emotion/react

// const Leave = () => {
//     return <h1>Leave</h1>;
// };
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import * as React from 'react';
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
  const [startdatevalue, startdatesetValue,enddatevalue, enddatesetValue] = React.useState(null);

  //for tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // for leavetype
  const handleChange1 = (event) => {
    setLeave(event.target.value);
  };

//   const [age, setAge] = React.useState('');

//   const handleChange1 = (event) => {
//     setAge(event.target.value);
//   };



        
  return (
    <>
        
        <div id ="box2">
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
                {/* <div id = "content"> */}
                    {/* <h1> Apply for Leave </h1></div> */}
                    <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                                <h1>Apply Leave</h1></div>
                    <div id ="box1">
                        
                        <div id = "selectbox">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                     
                                    <div>    
                                        <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>Leave Type</h3>
                                        </div>
                                        <TextField
                                        id="outlined-select-leavetype"
                                        select
                                        label="Select"
                                        value={leave}
                                        onChange={handleChange1}
                                        // helperText="Please select your currency"
                                        >
                                        {leavetypes.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                        
                                    </div>
                                
                                </Box>

                                {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>Leave Type</h3>
                                        </div>
                                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={age}
                                        // label="Age"
                                        onChange={handleChange1}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        <FormHelperText>With label + helper text</FormHelperText>
                                    </FormControl> */}
                        </div>
                        
                        <div id = "radio">
                            <FormControl component="fieldset">
                                {/* <FormLabel component="legend">Day</FormLabel> */}
                                <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                    <h3>Day</h3>
                                </div>
                                <RadioGroup row aria-label="Day" name="row-radio-buttons-group">
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
                        
                        <div id = "startdate">
                            <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                        <h3>Start Date</h3>
                                    </div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Basic example"
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
                                        <h3>End Date</h3>
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

                        <div id = "recommendby">
                            <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>Recommended by:</h3>
                                        </div>
                                <TextField 
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '35ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                                />
                        </div>

                        <div id = "approveby">
                            <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>To be approved by:</h3>
                                        </div>
                                <TextField 
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '35ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                                />
                        </div>


                        <div id = "ptdbalance">
                            <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>PTD Balance:</h3>
                                        </div>
                                <TextField 
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '35ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                                />
                        </div>

                        <div id = "ytdbalance">
                            <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>YTD Balance:</h3>
                                        </div>
                                <TextField 
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '35ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                                />
                        </div>


                        <div id = "remarks">
                            <div style = {{display: 'flex',justifyContent:'left',alignItems: 'left'}}>  
                                            <h3>Remarks:</h3>
                            </div>
                            <TextField
                                id="outlined-multiline-static"
                                
                                multiline
                                rows={16}
                                sx={{ m: 1, width: '30ch' }}
                                defaultValue="Default Value"
                                />
                        </div>

                        <div id = "submitbutton">
                            <Stack direction="row" spacing={5}>
                                <Button variant="contained" color="success" size="large">
                                    Submit
                                </Button>
                            </Stack>
                        </div>

                                            
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                
            
                </TabPanel>


                <TabPanel value={value} index={2}>
                    <ThemeProvider theme = {theme}>
                        <MUIDataTable
                            title={"ACME Employee list - customizeFilter"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                
                </TabPanel>
                
                <TabPanel value={value} index={3}>
                
            
                </TabPanel>
                
            </center>
        </div>
    </>
  );
}