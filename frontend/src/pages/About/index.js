import React from  'react';
import styled from 'styled-components';
import Template from '../../components/Templates';
import Resma from '../../components/Resma';

const Box = styled.div `
    display: block;
    width:100%;
    height: 100%;
    margin: 0 auto;
    max-height: calc(98%-160px);
    justify-content: center;
    align-content: center;
    text-align: left;
    padding:0;
    padding-left:1em;
    font-size: 0.75rem;

    ${props => props.left &&`
        margin-right:1em;
    `}
    ${props => props.right &&`
        padding:0;
        margin-left:1em;
    `}
`;

const BoxText = styled.h2 `
    margin: 0 auto;
    padding: 0;
    padding-bottom: 1.25em;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: none;
    outline: none;
    line-height: 1.25em;
    cursor: default;

    ${props => props.works &&`
        font-size: 1.5rem;
        font-weight: 700;

        &:hover{
            border-radius: 8px;
            color: palevioletred;
            border-bottom: 4px solid blueviolet;
            transition:0.2s linear;
        }
    `}
`;

const Tags = styled.li `
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    color: palevioletred;
    font-weight: 600;
    outline:none;
    list-style: none;
    cursor: default;
`;


export default function About(){
    return(
        <Template headerTitle="About" headerLink="/aboutme" >
                <Box left>
                    <Tags>Dev - Podcaster - Ambassador</Tags>
                    <div className="box-content">
                        <BoxText>
                            Hi, I am Pedro Thiago - you can call me Pethi - I am an Electrical Engineering student, Frontend Developer and Founder of the Steam Groups.
                        </BoxText>
                        <BoxText>
                            I am also a MARS Ambassador, STEAM Public Outreach and currently working on my Digital Influencer skills through my Podcast and Youtube Channel.
                        </BoxText>
                    </div>
                    <div className="box-content">
                        <BoxText>
                            I have worked with IoT, Project Management, Project Developping, App Development, Web Development.                
                        </BoxText>          
                    </div>
                </Box>
                
                <Box right>
                    <div className="box-content">
                        <Resma/>
                        <Resma/>
                        <Resma/>
                    </div>
                </Box>
        </Template>
    );
}