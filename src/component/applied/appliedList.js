import React, { useState, useEffect } from 'react';
import "@fontsource/montserrat"
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import Applied from './applied'

export default function AppliedList({ items, ...others }) {

    return (     
        <>
            {items.map((item)=>(
                <Applied key={item._id} details={item}></Applied>
            ))}
        </>
         
    )

}

