
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import "../Payslip.css";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@mui/x-data-grid';

export default function Payslip() {
    // var updateNewValue = "";
    // var updateNewValue1 = "";
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const months = [];
    const [value, setValue] = React.useState(new Date());
    const [value1, setValue1] = React.useState(new Date());
    const [updateNewValue, setValue2] = React.useState(new Date());
    const [updateNewValue1, setValue3] = React.useState(new Date());
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'fileName', headerName: 'File Name', width: 600 },
        // { field: 'download', headerName: 'Download', width: 830 }

    ];

    const rows = [
        // { id: 2, download: 'Link', fileName: monthNames[updateNewValue1.getMonth()] + " " + updateNewValue1.getFullYear() }
        // { id: 1, fileName: "January 2021" },
        // { id: 2, fileName: "February 2021" },
        { id: 1, fileName: monthNames[updateNewValue.getMonth()] + " " + updateNewValue.getFullYear() },
        { id: 2, fileName: monthNames[updateNewValue1.getMonth()] + " " + updateNewValue1.getFullYear() }
        // { id: 3, FileName: "March 2021" },
        // { id: 4, FileName: "April 2021" },
        // { id: 5, FileName: "May 2021" },
        // { id: 6, FileName: "June 2021" },
        // { id: 7, FileName: "July 2021" },
        // { id: 8, FileName: "August 2021" }


    ];
    return (
        <>
            {/* <div id="content" >
                <h1> Payslip</h1>
            </div> */}
            <div id="box">
                <center>
                    <FormControl>
                        <br />
                        <br />
                        <Grid container spacing={10} >

                            <Grid item lg={6}>
                                <div style={{ width: '600px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={6}>
                                            <DatePicker

                                                views={["year", "month"]}
                                                label="From:"
                                                minDate={new Date("2012-01-01")}
                                                maxDate={new Date("2023-12-31")}
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                    setValue2(newValue);

                                                }}

                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </Grid>

                            <Grid item lg={6}>
                                <div style={{ width: '600px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={6}>
                                            <DatePicker
                                                views={["year", "month"]}
                                                label="To:"
                                                minDate={new Date("2012-01-01")}
                                                maxDate={new Date("2023-12-31")}
                                                value={value1}
                                                onChange={(newValue1) => {
                                                    setValue1(newValue1);
                                                    setValue3(newValue1);


                                                }}

                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />

                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </Grid>

                        </Grid>
                    </FormControl>

                    <div style={{ height: 400, width: '100%' }}>
                        <br />
                        <br />
                        <br />
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </center>
            </div>
        </>
    );

}

// export default Payslip;