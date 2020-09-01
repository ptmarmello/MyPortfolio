import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Nav = styled.nav`
    display:flex;
    align-content: center;
    align-items:center;
    margin: 0 auto;
    padding: 0;
    position: fixed;
    z-index: 1;
    width: 100vw;
    background: #f5f5fd;
`;

const Unlist = styled.ul`
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    float: right;
`;

const NLprop = styled(NavLink)`
    background: transparent;
    border-radius: 4px;
    
    /* color: palevioletred; */
    color: black;
    margin: 0.25em 0.25em;
    padding: 0.25em 0.25em;
    outline: none;
    transition: border-bottom 0.6s easy-in;

    ${props => props.first &&`

        margin: 0.5em 1em;
        padding: 0 0;
        // padding: 0.25em 1em;
        font-size: 30px;
        // background: palevioletred;
        // color: white;
        // border: 2px solid palevioletred;
        
    `}

    ${props => props.active &&`
        color: palevioletred;
    `}

    ${props => props.works &&`
        &:hover{
        color: palevioletred;
        border-bottom: 2.2px solid blueviolet;
        transition:0.1s linear;
    }
    `}

    


`


export default class NavComponent extends React.Component{

    render(){
        return(
            <Nav>
                <NLprop first active to="/">Home</NLprop>
                <Unlist>
                    <NLprop works to="/aboutme">About</NLprop>
                    <NLprop works to="/projects">Projects</NLprop>
                    <NLprop works to="/skills">Skills</NLprop>
                    <NLprop works to="/contact">Contact Me</NLprop>
                    <NLprop works to="/more">More</NLprop>
                </Unlist>
            </Nav>
        );
    }
}
