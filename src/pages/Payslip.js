import { IconButton, InputAdornment, FormControl, InputLabel, Input, FormHelperText, FormLabel, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
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

import DownloadIcon from '@mui/icons-material/Download';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { VisibilityOff, Visibility } from '@mui/icons-material'
export default function Payslip() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    //dialog
    //monthly payslip
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
    //consolidated payslip
    const [open3mth, setOpen3mth] = React.useState(false);
    const [open6mth, setOpen6mth] = React.useState(false);
    const [open9mth, setOpen9mth] = React.useState(false);
    const [open12mth, setOpen12mth] = React.useState(false);
    //consolidated payslip
    const handleClickOpen3mth = () => {
        setOpen3mth(true);
    };
    const handleClickOpen6mth = () => {
        setOpen6mth(true);
    };
    const handleClickOpen9mth = () => {
        setOpen9mth(true);
    };
    const handleClickOpen12mth = () => {
        setOpen12mth(true);
    };

    //monthly payslip
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
    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShownJan(!passwordShownJan);
        setPasswordShownFeb(!passwordShownFeb);
        setPasswordShownMar(!passwordShownMar);
        setPasswordShownApr(!passwordShownApr);
        setPasswordShownMay(!passwordShownMay);
        setPasswordShownJun(!passwordShownJun);

        setPasswordShownJul(!passwordShownJul);
        setPasswordShownAug(!passwordShownAug);
        setPasswordShownSep(!passwordShownSep);
        setPasswordShownOct(!passwordShownOct);
        setPasswordShownNov(!passwordShownNov);
        setPasswordShownDec(!passwordShownDec);


        setPasswordShown3mth(!passwordShown3mth);
        setPasswordShown6mth(!passwordShown6mth);
        setPasswordShown9mth(!passwordShown9mth);
        setPasswordShown12mth(!passwordShown12mth);
    };
    const handleClose = () => {
        //monthly payslip
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
        //consolidated payslip
        setOpen3mth(false);
        setOpen6mth(false);
        setOpen9mth(false);
        setOpen12mth(false);

        resetInputField();
        resetError();

        setPasswordShownJan(false);
        setPasswordShownFeb(false);
        setPasswordShownMar(false);
        setPasswordShownApr(false);
        setPasswordShownMay(false);
        setPasswordShownJun(false);

        setPasswordShownJul(false);
        setPasswordShownAug(false);
        setPasswordShownSep(false);
        setPasswordShownOct(false);
        setPasswordShownNov(false);
        setPasswordShownDec(false);


        setPasswordShown3mth(false);
        setPasswordShown6mth(false);
        setPasswordShown9mth(false);
        setPasswordShown12mth(false);
    };


    const [password, setPassword] = React.useState("");
    const [passworderror, setPasswordErr] = React.useState({});
    const resetInputField = () => {
        setPassword("");

    };
    const resetError = () => {
        setPasswordErr("");

    };
    //monthly payslip
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
    //consolidated payslip
    const onSubmit3mth = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905710619506925578/Past3mths.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmit6mth = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905710622656827402/Past6mths.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmit9mth = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            window.location.href = 'https://cdn.discordapp.com/attachments/895523272718950413/905710626591105044/Past9mths.pdf';
            handleClose();
            resetInputField();
        }
    };
    const onSubmit12mth = (e) => {
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
        else if (password != "hcipassword123") {
            passworderror.passwordlength = "Incorrect Password! Please try again"
            isValid = false

        }
        setPasswordErr(passworderror);
        return isValid;
    }
    //dt

    const options = {
        selectableRows: "none",
        fixedHeader: true,
        rowsPerPage: 12,
        responsive: "scrollMaxHeight",

        download: false,
        print: false,
        search: false,
        textLabels: {
            body: {
                noMatch: <strong style={{ color: "red" }} > Invalid date range! Please key in a valid data range</strong>
            }





        },


        responsiveScroll: {
            maxHeight: "580px"
            // overflowY: 'scroll',
        },


    };

    const [passwordShownJan, setPasswordShownJan] = useState(false);
    const [passwordShownFeb, setPasswordShownFeb] = useState(false);
    const [passwordShownMar, setPasswordShownMar] = useState(false);
    const [passwordShownApr, setPasswordShownApr] = useState(false);
    const [passwordShownMay, setPasswordShownMay] = useState(false);
    const [passwordShownJun, setPasswordShownJun] = useState(false);
    const [passwordShownJul, setPasswordShownJul] = useState(false);
    const [passwordShownAug, setPasswordShownAug] = useState(false);
    const [passwordShownSep, setPasswordShownSep] = useState(false);
    const [passwordShownOct, setPasswordShownOct] = useState(false);
    const [passwordShownNov, setPasswordShownNov] = useState(false);
    const [passwordShownDec, setPasswordShownDec] = useState(false);

    const [passwordShown3mth, setPasswordShown3mth] = useState(false);
    const [passwordShown6mth, setPasswordShown6mth] = useState(false);
    const [passwordShown9mth, setPasswordShown9mth] = useState(false);
    const [passwordShown12mth, setPasswordShown12mth] = useState(false);



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
            <Button variant="outlined" onClick={handleClickOpenJan} endIcon={<DownloadIcon />} >
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
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownJan ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownJan ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}


                    />


                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitJan} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />} >Download</Button>
                </DialogActions>
            </Dialog>

        </div >
        ],
        ["February 2021.pdf", "02/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenFeb} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownFeb ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownFeb ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitFeb} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["March 2021.pdf", "03/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenMar} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownMar ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownMar ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitMar} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["April 2021.pdf", "04/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenApr} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownApr ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownApr ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitApr} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["May 2021.pdf", "05/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenMay} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownMay ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownMay ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitMay} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["June 2021.pdf", "06/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenJun} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownJun ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownJun ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitJun} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["July 2021.pdf", "07/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenJul} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownJul ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownJul ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitJul} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["August 2021.pdf", "08/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenAug} endIcon={<DownloadIcon />}>
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


                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownAug ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownAug ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitAug} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />} >Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["September 2021.pdf", "09/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenSep} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownSep ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownSep ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitSep} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["October 2021.pdf", "10/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenOct} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownOct ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownOct ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitOct} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                </DialogActions>
            </Dialog>

        </div >],
        ["November 2021.pdf", "11/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenNov} endIcon={<DownloadIcon />}>
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

        </div >],
        ["December 2021.pdf", "12/2021", <div>
            <Button variant="outlined" onClick={handleClickOpenDec} endIcon={<DownloadIcon />}>
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

                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={passwordShownDec ? "text" : "password"}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={togglePassword}
                                >
                                    {passwordShownDec ? <VisibilityOff /> : <Visibility />}
                                </IconButton>,

                        }}
                    />
                    {Object.keys(passworderror).map((key) => {
                        return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmitDec} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
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
                    setCellProps: () => ({
                        style: {
                            whiteSpace: "nowrap",



                            minWidth: "200px", maxWidth: "200px",
                            zIndex: 100
                        }
                    }),
                    setCellHeaderProps: () => ({
                        style: {
                            whiteSpace: "nowrap",



                            zIndex: 101
                        }
                    })
                }
            },
            {
                name: "Issued Date(Month/Year)",

                options: {
                    // display: false,
                    filter: false,
                    setCellProps: () => ({
                        style: {
                            whiteSpace: "nowrap",

                            minWidth: "300px", maxWidth: "300px",


                            zIndex: 100
                        }
                    }),
                    setCellHeaderProps: () => ({
                        style: {
                            whiteSpace: "wrap",



                            zIndex: 101
                        }
                    }),
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
                    setCellProps: () => ({
                        style: {
                            whiteSpace: "nowrap",
                            position: "sticky",
                            left: 0,

                            zIndex: 100
                        }
                    }),
                    setCellHeaderProps: () => ({
                        style: {
                            whiteSpace: "nowrap",
                            position: "sticky",
                            left: 0,

                            zIndex: 101
                        }
                    }),
                    filter: false,
                    sort: false,
                }
            },



        ]
        ;

    return (
        <>
            <div id="box" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <center>
                    <br />
                    <br />
                    <h1>Monthly Payslip</h1>
                    <br />
                    <FormControl>

                        <Grid container spacing={10} >
                            <Grid item lg={6}>
                                <div style={{ width: '120%' }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={6}>
                                            <DatePicker

                                                views={["month", "year"]}
                                                label="From:"
                                                minDate={new Date("2021-01-31")}
                                                maxDate={new Date("2021-12-31")}
                                                value={value}
                                                inputProps={{ readOnly: true }}

                                                onChangeRaw={(e) => e.preventDefault()}
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
                                <div style={{ width: '120%' }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={6}>
                                            <DatePicker

                                                views={["month", "year"]}
                                                label="To:"
                                                minDate={new Date("2021-01-31")}
                                                maxDate={new Date("2021-12-31")}
                                                value={value1}
                                                inputProps={{ readOnly: true }}
                                                onChangeRaw={(newValue1) => newValue1.preventDefault()}
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
                    <br />


                    <div style={{ display: 'table', tableLayout: 'fixed', width: '80%' }}>
                        <br />

                        <ThemeProvider theme={theme} >


                            <MUIDataTable id="muitable"

                                data={data}

                                columns={columns}
                                options={options}


                            />


                        </ThemeProvider>
                    </div>
                    <br />
                    <hr color="WhiteSmoke"></hr>
                    <br />
                    <h1>Consolidated Payslip</h1>
                    <br />
                    <br />
                    <Button variant="outlined" onClick={handleClickOpen3mth} size="large" endIcon={<DownloadIcon />}>
                        Past 3 months
                    </Button>
                    <Dialog open={open3mth} onClose={handleClose}>
                        <DialogTitle>Download</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To download the past 3 months payslip, please enter your password here.
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
                                type={passwordShown3mth ? "text" : "password"}
                                InputProps={{
                                    endAdornment:
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={togglePassword}
                                        >
                                            {passwordShown3mth ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>,

                                }}
                            />
                            {Object.keys(passworderror).map((key) => {
                                return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                            })}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={onSubmit3mth} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                        </DialogActions>
                    </Dialog>
                    &nbsp;
                    &nbsp;
                    <Button variant="outlined" onClick={handleClickOpen6mth} size="large" endIcon={<DownloadIcon />}>
                        Past 6 months
                    </Button>
                    <Dialog open={open6mth} onClose={handleClose}>
                        <DialogTitle>Download</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To download the past 6 months payslip, please enter your password here.
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
                                type={passwordShown6mth ? "text" : "password"}
                                InputProps={{
                                    endAdornment:
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={togglePassword}
                                        >
                                            {passwordShown6mth ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>,

                                }}
                            />
                            {Object.keys(passworderror).map((key) => {
                                return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                            })}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={onSubmit6mth} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                        </DialogActions>
                    </Dialog>
                    &nbsp;
                    &nbsp;
                    <Button variant="outlined" onClick={handleClickOpen9mth} size="large" endIcon={<DownloadIcon />}>
                        Past 9 months
                    </Button>
                    <Dialog open={open9mth} onClose={handleClose}>
                        <DialogTitle>Download</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To download the past 9 months payslip, please enter your password here.
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
                                type={passwordShown9mth ? "text" : "password"}
                                InputProps={{
                                    endAdornment:
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={togglePassword}
                                        >
                                            {passwordShown9mth ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>,

                                }}
                            />
                            {Object.keys(passworderror).map((key) => {
                                return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                            })}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={onSubmit9mth} target="_blank" rel="noreferrer">Download</Button>
                        </DialogActions>
                    </Dialog>
                    &nbsp;
                    &nbsp;
                    <Button variant="outlined" onClick={handleClickOpen12mth} size="large" endIcon={<DownloadIcon />} >
                        Past 12 months
                    </Button>
                    <Dialog open={open12mth} onClose={handleClose}>
                        <DialogTitle>Download</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To download the past 12 months payslip, please enter your password here.
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
                                type={passwordShown12mth ? "text" : "password"}
                                InputProps={{
                                    endAdornment:
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={togglePassword}
                                        >
                                            {passwordShown12mth ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>,

                                }}
                            />
                            {Object.keys(passworderror).map((key) => {
                                return <div> <strong style={{ color: "red" }}>{passworderror[key]}</strong></div>
                            })}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={onSubmit12mth} target="_blank" rel="noreferrer" endIcon={<DownloadIcon />}>Download</Button>
                        </DialogActions>
                    </Dialog>
                    <br />
                </center>

            </div >
        </>
    );

}
