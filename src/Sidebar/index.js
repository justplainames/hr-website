import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import Leave from "../assets/logo.svg";
import Payslip from "../assets/logo.svg";
import Noti from "../assets/logo.svg";
import styled from "styled-components";
import "@fontsource/montserrat"
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box';
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Card } from '@material-ui/core'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';


const useStyles = makeStyles(theme => ({
    notificationCard: {
        borderRadius: '5px'
    },
    notiItem: {
        width: '350px'
    },
    noti: {
        paddingRight: '10px'
    }


}))



const Container = styled.div`
    position: fixed;

    .active { 
        border-right: 4px solid var(--white);

        img {
            filter: invert(50%) sepia(4%) saturate(25%) hue-rotate(317deg) brightness(99%) contrast(91%);
        }
    }
`;

const MenuButton = styled.button`
    background-color: var(--black);   
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative; 

    &::before, &::after {
        content: "";
        background-color: var(--white);
        height: 2px;
        width: 1rem;
        position: absolute;
        transition: all 0.3s ease;
    }

    &::before {
        top: ${(props) => (props.clicked ? "1.5" : "1rem")};
        transform: ${props => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }

    &::after {
        top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
        transform: ${props => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
`;

const SidebarContainer = styled.div`
    background-color: var(--nav_bar);
    width: 5rem;
    height: 80vh;
    margin-top: 2rem;
    border-radius: 0.30px 30px 30px 0.30px;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;
`;

const Logo = styled.div`
    width: 3rem;
    margin: 1.5rem 0 0 1.5rem;

    img {
        width: 100%;
        height: auto;
    }
`;

const SlickBar = styled.ul`
    color: var(--black);
    list-style: none;
    display = flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--nav_bar);

    padding: 2rem 0;

    position: fixed;
    top: 23rem;
    left: 0;

    width: ${(props) => (props.clicked ? "12rem" : "5rem")};
    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
    text-decoration: none;
    width: 100%;
    padding: 2.5rem 0;
    cursor: pointer;

    display: flex;
    padding-left: 1.5rem;

    &:hover {
        border-right: 4px solid var(--white);

        img {
            filter: invert(50%) sepia(4%) saturate(25%) hue-rotate(317deg) brightness(99%) contrast(91%);
        }
    }

    img {
        width: 2rem;
        height: auto;
        filter: invert(0%) sepia(100%) saturate(20%) hue-rotate(39deg) brightness(93%) contrast(107%);
    }
`;

const Text = styled.span`
    color: var(--black);
    width: ${(props) => (props.clicked ? "100%" : "0")};
    overflow: hidden;
    margin-left: ${(props) => (props.clicked ? "3rem" : "0")};
    transition: all 0.5s ease;
`;

const TopBar = styled.div`
    display: inline-flex;
`;

function noti() {
    console.log("sss")
}

const Sidebar = () => {

    const [click, setClick] = useState(false); //nav bar
    //nav
    const [noticlicked, setnoticlicked] = useState(false);
    //
    const [showNoti, setshowNoti] = useState(false);



    const handleClick = () => setClick(!click);
    const classes = useStyles();
    return (
        <Container>

            <TopBar>

                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <Box sx={{ ml: 8, mt: 2 }}>
                    <Typography variant="h2" component="h2">
                        Homepage
                    </Typography>
                </Box>

                <Box ml={200} mt={5}>

                    <Box sx={{ display: 'flex' }}>
                        <Box mr={7} ml={28}>
                            <IconButton onClick={() => setshowNoti(prev => !prev)}>
                                <Box>
                                    <NotificationsNoneIcon sx={{ fontSize: 40 }} />
                                </Box >
                            </IconButton>
                        </Box>

                        <IconButton onClick={noti}>
                            <Box>
                                <PermIdentityIcon sx={{ fontSize: 40 }} />
                            </Box>
                        </IconButton>
                    </Box>
                    {showNoti &&
                        <Box ml={10} pt={1.5} sx={{ position: 'absolute' }}>
                            <Card className={classes.notificationCard}>
                                <Box>
                                    <Card className={classes.notiItem}>
                                        <Box pt={2} >
                                            <Box pb={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Typography>Notifications</Typography>

                                            </Box>
                                            <Divider />
                                            <Box pl={2} pt={2}>
                                                <Element name="test1" className="element" >
                                                    <Box sx={{ display: 'flex' }} pb={1}>
                                                        <Box pr={2}>
                                                            <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
                                                        </Box>
                                                        <Box sx={{ display: 'flex' }}>
                                                            <Typography>
                                                                Benjamin Tan has recommended leave for you on the 30th october 2021
                                                            </Typography>
                                                            <Box pr={1}>
                                                                <CircleIcon sx={{ fontSize: 15 }} ></CircleIcon>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box pl={8} pb={2} sx={{ display: 'flex' }}>
                                                        <Box pr={1}>
                                                            <Button variant="contained" color="success" size="small">
                                                                Accept
                                                            </Button>
                                                        </Box>
                                                        <Button variant="outlined" color="error" size="small">
                                                            Decline
                                                        </Button>
                                                    </Box>
                                                    <Divider />
                                                </Element>
                                            </Box>
                                            <Box pl={2} pt={2}>
                                                <Element name="test1" className="element" >
                                                    <Box sx={{ display: 'flex' }} pb={1}>
                                                        <Box pr={2}>
                                                            <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
                                                        </Box>
                                                        <Box sx={{ display: 'flex' }}>
                                                            <Typography>
                                                                Benjamin Tan has recommended leave for you on the 30th october 2021
                                                            </Typography>
                                                            <Box pr={1}>
                                                                <CircleIcon sx={{ fontSize: 15 }} ></CircleIcon>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box pl={8} pb={2} sx={{ display: 'flex' }}>
                                                        <Box pr={1}>
                                                            <Button variant="contained" color="success" size="small">
                                                                Accept
                                                            </Button>
                                                        </Box>
                                                        <Button variant="outlined" color="error" size="small">
                                                            Decline
                                                        </Button>
                                                    </Box>
                                                    <Divider />
                                                </Element>
                                            </Box>

                                        </Box>
                                    </Card>
                                </Box>
                            </Card>


                        </Box>
                    }
                </Box>


            </TopBar>

            <SidebarContainer>
                <MenuButton clicked={click} onClick={() => handleClick()}>
                </MenuButton>
                <SlickBar clicked={click}>
                    <Item onClick={() => setClick(false)} exact activeClassName="active" to="/">
                        <img src={Home} alt="Home" />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item onClick={() => setClick(false)} activeClassName="active" to="/leave">
                        <img src={Leave} alt="Leave" />
                        <Text clicked={click}>Leave</Text>
                    </Item>
                    <Item onClick={() => setClick(false)} activeClassName="active" to="/payslip">
                        <img src={Payslip} alt="Payslip" />
                        <Text clicked={click}>Payslip</Text>
                    </Item>
                </SlickBar>
            </SidebarContainer>
        </Container>
    );
};

export default Sidebar