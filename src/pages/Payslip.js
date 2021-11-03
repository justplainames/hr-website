import { FormControl, InputLabel, Input, FormHelperText, FormLabel, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import React, { useState } from 'react';
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
import { FlashOffRounded, Password } from '@mui/icons-material';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Payslip() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);


    //dialog
    const [openJan, setOpenJan] = React.useState(false);
    const [openFeb, setOpenFeb] = React.useState(false);
    const [openMar, setOpenMar] = React.useState(false);
    const [openApr, setOpenApr] = React.useState(false);
    const [openMay, setOpenMay] = React.useState(false);
    const [openJun, setOpenJun] = React.useState(false);
    const [openJul, setOpenJul] = React.useState(false);
    const [openAug, setOpenAug] = React.useState(false);
    const [openSep, setOpenSep] = React.useState(false);
    const [openOct, setOpenOct] = React.useState(false);
    const [openNov, setOpenNov] = React.useState(false);
    const [openDec, setOpenDec] = React.useState(false);
    const handleClickOpenJan = () => {
        setOpenJan(true);
    };
    const handleClickOpenFeb = () => {
        setOpenFeb(true);
    };
    const handleClickOpenMar = () => {
        setOpenMar(true);
    };
    const handleClickOpenApr = () => {
        setOpenApr(true);
    };
    const handleClickOpenMay = () => {
        setOpenMay(true);
    };
    const handleClickOpenJun = () => {
        setOpenJun(true);
    };
    const handleClickOpenJul = () => {
        setOpenJul(true);
    };
    const handleClickOpenAug = () => {
        setOpenAug(true);
    };
    const handleClickOpenSep = () => {
        setOpenSep(true);
    };
    const handleClickOpenOct = () => {
        setOpenOct(true);
    };
    const handleClickOpenNov = () => {
        setOpenNov(true);
    };
    const handleClickOpenDec = () => {
        setOpenDec(true);
    };
    const handleClose = () => {
        setOpenJan(false);
        setOpenFeb(false);
        setOpenMar(false);
        setOpenApr(false);
        setOpenMay(false);
        setOpenJun(false);
        setOpenJul(false);
        setOpenAug(false);
        setOpenSep(false);
        setOpenOct(false);
        setOpenNov(false);
        setOpenDec(false);
        resetInputField();
        resetError();
    };


    const [password, setPassword] = React.useState("");
    const [passworderror, setPasswordErr] = React.useState({});
    const resetInputField = () => {
        setPassword("");

    };
    const resetError = () => {
        setPasswordErr("");

    };
    const onSubmitJan = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104068580638720/JAN.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitFeb = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104000792285214/FEB.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitMar = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104059625779280/MAR.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitApr = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104003002691664/APR.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitMay = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104060342996992/MAY.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitJun = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104057516032050/JUN.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitJul = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104054835888229/JUL.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitAug = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905103996073693234/AUG.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitSep = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104066919665664/SEP.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmitOct = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905104063492935690/OCT.pdf';
            handleClose();
            resetInputField();
        }
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
    const onSubmitDec = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905103999332667392/DEC.pdf';
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
        if (password != "hrapp") {
            passworderror.passwordlength = "Incorrect Password! Please try again"
            isValid = false

        }
        setPasswordErr(passworderror);
        return isValid;
    }
    //dt

    const options = {
        selectableRows: "none"

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
            <Button variant="outlined" onClick={handleClickOpenJan}>
                Download
            </Button>

            <Dialog open={openJan} onClose={handleClose} class="JAN">
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the January 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitJan} target="_blank" rel="noreferrer" >Download</Button>
                </DialogActions>
            </Dialog>

        </div >
        ],
        ["February 2021.pdf", "02/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenFeb}>
                Download
            </Button>
            <Dialog open={openFeb} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the February 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitFeb} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["March 2021.pdf", "03/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenMar}>
                Download
            </Button>
            <Dialog open={openMar} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the March 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitMar} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["April 2021.pdf", "04/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenApr}>
                Download
            </Button>
            <Dialog open={openApr} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the April 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitApr} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["May 2021.pdf", "05/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenMay}>
                Download
            </Button>
            <Dialog open={openMay} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the May 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitMay} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["June 2021.pdf", "06/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenJun}>
                Download
            </Button>
            <Dialog open={openJun} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the June 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitJun} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["July 2021.pdf", "07/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenJul}>
                Download
            </Button>
            <Dialog open={openJul} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the July 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitJul} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["August 2021.pdf", "08/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenAug}>
                Download
            </Button>
            <Dialog open={openAug} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the August 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitAug} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["September 2021.pdf", "09/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenSep}>
                Download
            </Button>
            <Dialog open={openSep} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the September 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitSep} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["October 2021.pdf", "10/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenOct}>
                Download
            </Button>
            <Dialog open={openOct} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the October 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitOct} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["November 2021.pdf", "11/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenNov}>
                Download
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
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitNov} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["December 2021.pdf", "12/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenDec}>
                Download
            </Button>
            <Dialog open={openDec} onClose={handleClose}>
                <DialogTitle>Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To download the December 2021 payslip, please enter your password here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password:"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitDec} target="_blank" rel="noreferrer">Download</Button>
                </DialogActions>
            </Dialog>

        </div >]
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

                    <div style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
                        <br />

                        <ThemeProvider theme={theme} >
                            <MUIDataTable

                                data={data}

                                columns={columns}
                                options={options}
                            />
                        </ThemeProvider>
                    </div>
                </center>
            </div >
        </>
    );

}
