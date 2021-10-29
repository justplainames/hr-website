import React, { useState } from 'react'

import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import Leave from "../assets/logo.svg";
import Payslip from "../assets/logo.svg";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    position: fixed;

    .active { 
        border-right: 4px solid var(--white);

        img {
            filter: invert(50%) sepia(4%) saturate(25%) hue-rotate(317deg) brightness(99%) contrast(91%);
        }
    }
`;

const Button = styled.button`
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

    position: absolute;
    top: 18rem;
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

const Sidebar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

    return (
    <Container>        
        <Logo>
            <img src = {logo} alt = "logo" />
        </Logo>
        
        <SidebarContainer>        
            <Button clicked = {click} onClick={() => handleClick()}>
                Click
            </Button>
            <SlickBar clicked = {click}>
                <Item onClick = {() => setClick(false)} exact activeClassName = "active" to = "/">
                    <img src = {Home} alt = "Home" />
                    <Text clicked = {click}>Home</Text>
                </Item>
                <Item onClick = {() => setClick(false)} activeClassName = "active" to = "/leave">
                    <img src = {Leave} alt = "Leave" />
                    <Text clicked = {click}>Leave</Text>
                </Item>
                <Item onClick = {() => setClick(false)} activeClassName = "active" to = "/payslip">
                    <img src = {Payslip} alt = "Payslip" />
                    <Text clicked = {click}>Payslip</Text>
                </Item>
            </SlickBar>            
         </SidebarContainer>
    </Container>
    );
};

export default Sidebar