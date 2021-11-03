import { FormControl, InputLabel, Input, FormHelperText, FormLabel, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import "../Payslip.css";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@mui/x-data-grid';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { FlashOffRounded } from '@mui/icons-material';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Payslip() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    //dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //dt
    const options = {
        filterType: 'checkbox',
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const months = [];
    const [value, setValue] = React.useState("2021-01-31");
    const [value1, setValue1] = React.useState("2021-12-31");
    const [updateNewValue, setValue2] = React.useState("01/2021");
    const [updateNewValue1, setValue3] = React.useState("12/2021");
    const data = [
        ["January 2021.pdf", "01/2021", <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Download
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the January 2021 payslip, please enter your password here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} href="https://cdn.discordapp.com/attachments/895523272718950413/905104068580638720/JAN.pdf" target="_blank" rel="noreferrer" >Download</Button>
                </DialogActions>
            </Dialog>
        </div>],
        // ["January 2021.pdf", "01/2021", [< Button variant="contained" color="success" href="https://cdn.discordapp.com/attachments/895523272718950413/905104068580638720/JAN.pdf" target="_blank" rel="noreferrer" >
        //     Download
        // </Button >]],
        ["February 2021.pdf", "02/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104000792285214/FEB.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["March 2021.pdf", "03/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104059625779280/MAR.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["April 2021.pdf", "04/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104003002691664/APR.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["May 2021.pdf", "05/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104060342996992/MAY.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["June 2021.pdf", "06/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104057516032050/JUN.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["July 2021.pdf", "07/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104054835888229/JUL.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["August 2021.pdf", "08/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905103996073693234/AUG.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["September 2021.pdf", "09/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104066919665664/SEP.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["October 2021.pdf", "10/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104063492935690/OCT.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["November 2021.pdf", "11/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905104061756502048/NOV.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]],
        ["December 2021.pdf", "12/2021", [< Button variant="outlined" href="https://cdn.discordapp.com/attachments/895523272718950413/905103999332667392/DEC.pdf" target="_blank" rel="noreferrer" >
            Download
        </Button >]]
    ];


    const columns =
        [
            {
                name: "File",

                options: {
                    filter: false,

                }
            },
            {
                name: "Issued Date(Mth/Year)",

                options: {
                    filter: false,
                    filterType: "custom",
                    // filterList: [monthNames[updateNewValue.getMonth()] + " " + updateNewValue.getFullYear(), monthNames[updateNewValue1.getMonth()] + " " + updateNewValue1.getFullYear()],
                    filterList: ["From:" + updateNewValue, "To:" + updateNewValue1],

                    filterOptions: {
                        names: [],

                        logic(date, filters) {

                            if (filters[0] && filters[1]) {
                                return !(date >= filters[0].slice(5) && date <= filters[1].slice(3));
                            } else if (filters[0]) {
                                return date != filters[0].slice(5);
                            } else if (filters[1]) {
                                return date != filters[1].slice(3);
                            }
                            return false;

                        },

                    },
                    print: false
                }
            },

            {
                name: "DOWNLOAD",

                options: {
                    filter: false,
                    sort: false,
                }
            },



        ]
        ;

    return (
        <>
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

                                                views={["month", "year"]}
                                                label="From:"
                                                minDate={new Date("2021-01-31")}
                                                maxDate={new Date("2021-12-31")}
                                                value={value}

                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                    setValue2(("0" + (newValue.getMonth() + 1)).slice(-2) + "/" + newValue.getFullYear());


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

                                                views={["month", "year"]}
                                                label="To:"
                                                minDate={new Date("2021-01-31")}
                                                maxDate={new Date("2021-12-31")}
                                                value={value1}

                                                onChange={(newValue1) => {
                                                    setValue1(newValue1);
                                                    setValue3(("0" + (newValue1.getMonth() + 1)).slice(-2) + "/" + newValue1.getFullYear());

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
                        <ThemeProvider theme={theme}>
                            <MUIDataTable

                                data={data}

                                columns={columns}
                                options={options}
                            />
                        </ThemeProvider>
                    </div>
                </center>
            </div>
        </>
    );

}


