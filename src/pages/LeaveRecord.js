import { ThemeProvider } from "@mui/styles";
import MUIDataTable from "mui-datatables";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';

import { stringconversionCaps } from '../utils/conversion';

import { makeStyles } from '@material-ui/core/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const Leaverecord = () => {

    const [data, setData] = useState([])   

    const fetchapplied =  (id) => {
        axios.get('http://localhost:5000/applied', {
           params: {
               id: id
           }
       })
           .then(res => {
                if (res.data.applies.length > 0) {
                    for(var i = 0; i < res.data.applies.length; i++) {
                        var str = ''
                        if (res.data.applies.approved) {
                            str = 'Approved'
                        }
                        else {
                            str = 'Pending'
                        }


                        setData(oldArray => [...oldArray, ['31/10/21', stringconversionCaps(res.data.applies[i].types), res.data.applies[i].from, res.data.applies[i].to, res.data.applies[i].days, res.data.applies[i].recomemdedby, res.data.applies[i].approvedby, str]]);
                    }
                }
           })
   }


   useEffect(() => {
       const id = localStorage.getItem("isAuthenticated");
       fetchapplied(id)
   }, []);   
    
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

    const optionsLeaveRecord = {
        filter: true,
        filterType: "multiselect",
        responsive: "scrollMaxHeight",
        selectableRows: "none",
        download: false,
        print: false,
        fixedHeader: false,
    };

      return (
        <ThemeProvider theme={theme}> 
            <MUIDataTable
                title={"Leave Records"}
                data={data}
                columns={columnsforRecord}
                options={optionsLeaveRecord}
                
            />
        </ThemeProvider>



        // <ThemeProvider theme={theme}>
        //     <MUIDataTable                            
        //         title={"Leave Records"}
        //         data={data}
        //         columns={columnsforRecord}
        //         options={optionsLeaveRecord}
        //     />
        // </ThemeProvider>
        
      );
    }

export default Leaverecord