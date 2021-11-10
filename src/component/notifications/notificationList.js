import React from 'react';
import "@fontsource/montserrat"
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ConstructionOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function NotificationList({ id, details,rerendering , ...others }) {
    const userId = localStorage.getItem("isAuthenticated");
    return (
        <Box pt={2} onClick ={()=>{
            axios.post('http://localhost:5000/updatenoti', {

                "id": userId,
                "notiid":id
            }

            ).then(res=>{
                rerendering()
            }).catch(error => {
                console.log(error)
                //do somthing to error check
            })
        }}>

            <Grid container spacing={2} pl={2}>
                <Grid item xs={10}>
                    <Box sx={{ display: 'flex' }} pb={1}>
                        <Box pr={2}>
                            <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            {
                                details.status.isrecommended===true ?
                                    <Typography>
                                        {details.requester.name} has recommended leave for you on the {details.from}
                                    </Typography> :
                                    <Typography>
                                        You have Applied {details.types.charAt(0).toUpperCase() + details.types.slice(1)} Leave on the {details.from} to {details.to}
                                    </Typography>
                            }
                        </Box>  
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pr={2} mt={1}>
                        {details.status.read === true ? <CircleIcon sx={{ fontSize: 15, color: 'white' }} ></CircleIcon> : <CircleIcon sx={{ fontSize: 15, color: 'lightblue' }} ></CircleIcon>}
                    </Box>
                </Grid>
            </Grid>
            <Box pl={8} pb={2} sx={{ display: 'flex' }}>
            {
                details.status.accepted === "null" ?
                   <Box sx={{ display: 'flex' }} pl={2}>
                        <Box pr={2}>
                            <Button variant="contained" color="success" size="medium" id={id} >
                                <Link style={{textDecoration: "none", color:"#fff"}} to={{ pathname: "/leave", state: details }} >Accept</Link>
                            </Button>
                        </Box>
                        <Button variant="outlined" color="error" size="medium">
                            Decline
                        </Button>
                   </Box>
                    :
                    details.status.accepted === "applied" ?
                    <Typography>{details.days===1 ? details.days + ' Day': details.days + ' Days'}</Typography>
                    :                 
                    <Typography>{details.status.accepted}</Typography>
              
                    
            }

            <Typography>{details.requestedon}</Typography>
            </Box>
            
            <Divider />

        </Box>

    )

}