import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Gears from "../assets/maintenance.svg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    imgsize: {
        height: "200px",
        width: "200px"
    }
}))

const Maintenance = () => {
    const classes = useStyles();

    return(
        ReactDOM.render(
            <div
              style={{
                  position: 'absolute', left: '50%', top: '40%',
                  transform: 'translate(-50%, -50%)'
              }}
              >
            <Box sx={{width:"1600px"}}>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Typography variant="h1" component="h1">
                        Site under maintenance
                    </Typography>
                </Box>
                <Box sx={{display:"flex", justifyContent:"center"}} pt={5}>
                    <img className={classes.imgsize} src={Gears} />
                </Box>
                <Box sx={{display:"flex", justifyContent:"center"}} pt={5}> 
                    <Typography variant="h6" component="h6">
                        This page is currently under maintenance. We should be back shortly. Thank you for your patience.
                    </Typography>
                </Box>
            </Box>
            </div>,
            document.getElementById('root')
    ));
}

export default Maintenance;