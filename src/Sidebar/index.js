import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import Leave from "../assets/leave.svg";
import Payslip from "../assets/payslip.svg";
import Profile from "../assets/profile.png";
import styled from "styled-components";
import "@fontsource/montserrat"
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Card } from '@material-ui/core'
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Notifications from "../component/notifications/notifications";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import axios from 'axios';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';

const useStyles = makeStyles(theme => ({
    notificationCard: {
        borderRadius: '5px',
        border: "1px solid grey"
    },
    notiItem: {
        width: '350px'
    },
    noti: {
        paddingRight: '10px'
    },

    bold: {
        fontWeight: 600
    },

    manageColor: {
        color: "#008BFF",
    },

    button: {
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#d1d1d1'
        }
    },

    imgsize: {
        height: "80px",
        width: "80px"
    },
    myComponent: {
        "& .MuiIconButton-root": {
          padding: 0
        }
    }
}))



const Container = styled.div`
    position: fixed;
    height:120px;
    z-index:2;
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

    position: fixed;
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
    top: 24rem;
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
    background-color:#e5edf9;
    width:1920px;
    height:115px;
`;

const isAuthenticated = localStorage.getItem("isAuthenticated");


const Sidebar = () => {

    const [click, setClick] = useState(false); //nav bar

    const [showNoti, setshowNoti] = useState(false);

    const [notificationsitems, setnotificationsitems] = useState([]);

    const [showProfile, setShowProfile] = useState(false);
    const [profileItems, setProfileItems] = useState([])

    const fetchNoti = async () => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        await axios.get('http://localhost:5000/notifications', {
            params: {
                id: isAuthenticated
            }
        })
            .then(res => {
                setnotificationsitems(res.data.notifications);

            })
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetchNoti()
        }
    }, []);

    const rerendernoti = () => {
        fetchNoti()
    }

    const fetchProfile = async () => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        await axios.get('http://localhost:5000/profiles', {
            params: {
                id: isAuthenticated
            }
        })
            .then(res => {
                setProfileItems(res.data);
            })
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetchProfile()
        }
    }, []);

    const countNotiUnread = (data) => {
        var counter = 0
        for (var i = 0; i < data.length; i++) {
            if (!data[i].status.read) {
                counter++;
            }
        }

        return counter
    }


    const handleClick = () => setClick(!click)

    const classes = useStyles();

    const [titleName, setTitleName] = useState("")

    return (


        <Container>

            <TopBar>

                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <Box sx={{ ml: 8, mt: 3 }}>
                    <Typography className={classes.bold} variant="h3" component="h3">
                        {titleName === "" ? "Homepage" : titleName}
                    </Typography>
                </Box>

                <Box ml={140} mt={5}>

                    <Box sx={{ display: 'flex' }}>
                        <Box mr={10} ml={20} className={classes.myComponent}>
                            <Badge badgeContent={countNotiUnread(notificationsitems)} color="primary">
                                <IconButton style={{padding:'0!important'}} onClick={() => {
                                    setshowNoti(prev => !prev)
                                    setShowProfile(false)
                                }}>
                                    <Box sx={{ display: 'flex' }}>
                                        <NotificationsNoneIcon sx={{ fontSize: 40 }} />
                                        <Box sx={{ display: 'flex' }}>
                                        
                                        </Box>
                                    </Box >
                                </IconButton>
                            </Badge>

                        </Box>
                        <Box className={classes.myComponent}>
                        <IconButton onClick={() => {
                            setShowProfile(prev => !prev)
                            setshowNoti(false)

                        }}>
                            <Box>
                                <PermIdentityIcon sx={{ fontSize: 40 }} />
                            </Box>
                        </IconButton>
                        </Box>
                    </Box>
                    {showNoti &&
                        <Box pt={1.3} sx={{ position: 'absolute' }}>
                            <Card className={classes.notificationCard}>
                                <Box >
                                    <Card className={classes.notiItem}>
                                        <Box pt={2} >
                                            <Box pl={3}>
                                                <Typography className={classes.bold}> Notifications</Typography>
                                            </Box>
                                            <Box pb={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                            </Box>
                                            <Divider />
                                            <Box sx={{ overflow: 'auto', maxHeight: '1000px' }}>
                                                <Notifications items={notificationsitems} rerendering={rerendernoti}></Notifications>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Box>
                            </Card>
                        </Box>
                    }

                    {showProfile &&
                        <Box pt={1.3} sx={{ position: 'absolute' }}>
                            <Card className={classes.notificationCard}>
                                <Box >
                                    <Card className={classes.notiItem}>
                                        <Box pt={2} >
                                            <Box sx={{ justifyContent: 'left' }}>
                                                <Box pl={3} pb={1}>
                                                    <Typography className={classes.bold}>Account</Typography>
                                                </Box>
                                                <Divider />
                                                <Box pl={2} pt={2} pb={3} sx={{ display: 'flex' }}>
                                                    <Box pr={2} sx={{ fontSize: 50 }}>
                                                        <img className={classes.imgsize} src={Profile} />
                                                    </Box>
                                                    <Box>
                                                        <Box pl={1}>
                                                            <Box pb={0.8}>
                                                                <Typography className={classes.bold}>{profileItems.name}</Typography>
                                                            </Box>
                                                            <Box pb={0.8}>
                                                                <Typography >{profileItems.email}</Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box ml={1} >
                                                            <Link href="/Maintenance" underline="hover">
                                                                {'Manage'}
                                                            </Link>
                                                            {/* <Button className={classes.manageColor} onClick href="/">Manage</Button> */}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Divider />
                                                <Box className={classes.button} pl={2.5} pt={2} pb={2} sx={{ display: "flex" }}>
                                                    <SettingsIcon color="action"></SettingsIcon>
                                                    <Box pl={2.5}>
                                                        <Typography >
                                                            <Link href="/Maintenance" underline="none" color="black">
                                                                {'Setting'}
                                                            </Link>
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Divider />
                                                <Box className={classes.button} pl={3} pt={2} pb={2} sx={{ display: "flex" }}>
                                                    <LogoutIcon color="action"> </LogoutIcon>
                                                    <Box pl={2}>
                                                        <Typography >
                                                            <Link onClick={() => {
                                                                localStorage.clear()
                                                                window.location.pathname = "/auth";

                                                            }} underline="none" color="black">
                                                                {'Log out'}
                                                            </Link>
                                                        </Typography>
                                                    </Box>
                                                </Box>
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
                    <Item onClick={() => { setClick(false); setTitleName("Homepage"); }} exact activeClassName="active" to="/">
                        <img src={Home} alt="Home" />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item onClick={() => { setClick(false); setTitleName("Leave"); }} activeClassName="active" to="/leave">
                        <img src={Leave} alt="Leave" />
                        <Text clicked={click}>Leave</Text>
                    </Item>
                    <Item onClick={() => { setClick(false); setTitleName("Payslip"); }} activeClassName="active" to="/payslip">
                        <img src={Payslip} alt="Payslip" style={{ width: 35, height: 35 }} />
                        <Text clicked={click}>Payslip</Text>
                    </Item>
                </SlickBar>
            </SidebarContainer>
        </Container>
    );
};

export default Sidebar