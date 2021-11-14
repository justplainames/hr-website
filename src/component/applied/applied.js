import React, { useState, useEffect } from 'react';
import "@fontsource/montserrat"
import { makeStyles } from '@material-ui/core/styles';

import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Toolbar, TextField, InputAdornment, Box } from '@material-ui/core'
import Button from '@mui/material/Button';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { cssname } from '../../utils/cssname';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Alert, AlertTitle } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { typographyVariant } from '@mui/system';
import { naming } from '../../utils/naming'; 

const useStyles = makeStyles(theme => ({
    cardinfo: {
        borderRadius: '15px',
        width: '380px',
        height: '210px',
    }

}))


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let months = d.getMonth();
let day = d.getDate();
let year = d.getFullYear();
const month = new Array(12);
month[0] = "January";
month[1] = "Febuary";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

export default function Applied({ details, rerender, ...others }) {
    const classes = useStyles();
    //console.log("These are the details:")
    const [editdate, seteditdate] = useState(0);
    const [editdateto, seteditdateto] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [open3, setOpen3] = useState(false);




    useEffect(() => {
        const date = details.from
        const dateTo = details.to
        const splitDate = date.split("/");
        const splitDateTo = dateTo.split("/");
        seteditdate(splitDate)
        seteditdateto(splitDateTo)
    }, []);

    const startMonth = month[editdate[0] - 1]
    const startDay = editdate[1]
    const startYear = editdate[2]
    const endMonth = month[editdateto[0] - 1]
    const endDay = editdateto[1]
    const endYear = editdateto[2]
    const [opac, setopac] = useState('1')
    const [loading, setLoading] = useState(false);
    const handleDelete = (e) => {
        e.preventDefault()
        setopac('0.4')
        setLoading(true)
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        const id = details._id
        axios.post('http://localhost:5000/deleteApplied',
            {

                "userId": isAuthenticated,
                "id": id, 
                "days" :details.days,
                "types" : details.types
            }).then(res => {
                setOpen3(false)

                rerender()


            })
    }


    const handleClose = () => {
        setOpen3(false);
    };


    const vali = (e) => {
        e.preventDefault();
        setOpen3(true)
    }

    const changeColor = (details) => {
        if (details.types === 'meeting' || details.types === 'course') {
            return cssname(details.types)[1]
        }
        else if (details.approved) {
            return cssname('approved')[1]
        }
        else {
            return cssname(details.types)[1]
        }
    }


    return (
        <Box pl={2.5} pt={3}>

            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={open3}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogTitle id="alert-dialog-title">
                    {"Confirmation"}
                </DialogTitle>
                <DialogContent>

                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to cancel?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Confirm
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
                    You have canceled the leave for {startMonth} {startDay}, {startYear} - {endMonth} {endDay}, {endYear}
                </Alert> :
                    false}
            </div>

            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <FadeLoader color={"black"} loading={loading} css={override} size={10} />
            </div>

            {details.declined ? '' : <Card className={classes.cardinfo} elevation={0} style = {{border: "2px solid " + changeColor(details)}}>            
                <Box sx={{ display: 'flex' }} >
                    <Box>
                        <Box sx={{ display: 'flex' }} >
                            <Box pl={2} pt={1.8} mr={1} sx={{display:"flex", width: "600px"}}>
                                <Typography variant="h5" style={{display: 'inline-block'}}>
                                    {naming(details.types) + ' '}
                                    {details.types === 'meeting' || details.types === 'course'
                                        ? ''
                                        :  [
                                            (details.approved
                                                ? ' Leave'
                                                : <Typography variant="h5" style={{display: 'inline-block'}}> Leave <Typography style={{display: 'inline-block'}}>(Pending) </Typography> </Typography>
                                            ),
                                        ]
                                    }
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ display: 'flex' }} ml={2}>


                            <Box >
                                <Box pt={2.5}>
                                    {details.from === details.to ? <Typography>{startMonth} {startDay}, {startYear} </Typography> : <Typography> {startMonth} {startDay}, {startYear} - {endMonth} {endDay}, {endYear} </Typography>}
                                </Box>

                                <Box pt={2}>
                                    <Typography>
                                        {details.types === 'meeting' ? 'Time: 9am - 10am' : ''}
                                        {details.types === 'meeting' ? '' : details.days === 1 ? details.days + ' day' + ' (' + details.daytype + ')' : details.days + ' days' + ' (' + details.daytype + ')'}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <Box pt={2} style={{ width: '200px' }}>
                                        {
                                            details.remarks === 'nil' ?
                                                <Typography >
                                                    {''}
                                                </Typography>
                                                :
                                                <Typography>
                                                    Details: {details.remarks}
                                                </Typography>
                                        }
                                    </Box>

                                    <Box pt={4} pl={1}>
                                        {details.types !== 'meeting' && details.types !== 'course' ? <Button onClick={vali} variant="outlined" color="error" size="small"> Cancel Leave </Button> : ''}
                                    </Box>


                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>
            </Card>
            }
            
        </Box>

    )

}