import React from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
// import foto from '../../assets/images/homem.jpg';
import { FiTwitter,FiInstagram,FiYoutube,FiGithub } from 'react-icons/fi';
import { ImSpotify } from 'react-icons/im';
import styled from 'styled-components';


import './styles.css';
import LateralHome from './components/Lateralwhat';

const Social = styled.ul`
    display:grid;
    grid-template-columns: repeat(6,minmax(20px, 50px));
    grid-template-rows: 1fr;

    margin: 0 auto;
    padding: 0;
    padding-bottom: 1em;
    align-items: center;
    
`;

const Lettering = styled.h3`
    display: inline-block;
    font-size: 24px;
    margin-block-start:0.4em;
    margin-block-end: 1em;
    cursor: default;
    ${props=> props.works &&`
        font-size: 25px;
        &:hover{
            font-size:26px;
        }
    `}

    ${props => props.eng &&`
        color: orange;
    `}

    ${props => props.dev &&`
        color: blueviolet;
    `}

    ${props => props.youtube &&`
        color: #FF0000;
    `}

    ${props => props.business &&`
        color: palevioletred;
    `}

    ${props => props.podcast &&`
        color: #1DB954;
    `}

    ${props => props.small &&`
        font-size: 18px;
        font-weight: 500;
        padding: 0;
        margin-bottom: 0.4em;
    `}
`;

const HeaderText = styled(Lettering)`
    margin-block-end: 0.4em;
    font-size: 36px;
    text-align: left;
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
    outline: none;
    color: blueviolet;

    &:hover{
        border-radius: 8px;
        color: palevioletred;
        border-bottom: 4px solid blueviolet;
        transition:0.2s linear;
        transform: translate(0px,-10px);
    }

`;

const IconLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    transition: font-size 0.2s;

    &:hover{
        font-size:22px;
    }
`;

export default function Home(){
    return(
        <div className="App-content">
            <Navbar/>
            <div className="App-main-container">
                <div className="contain">
                    <section>
                        <div className="section-text">
                            <div className="title-me">
                                <HeaderText>Heyy, I am</HeaderText>
                                <HeaderText><HeaderLink className="name-link" to="https://about.me/pethi" target="blank">Pedro Thiago</HeaderLink></HeaderText>
                                 
                            </div>
                            <div className="section-description">
                                <Lettering>I'm an <Lettering works eng>Engineering Student,</Lettering><Lettering works dev>Frontend Developer</Lettering> and crazy about <Lettering business works >Business Development</Lettering>.</Lettering>
                            </div>
                            <div className="social-media-grid">
                                <Lettering small className="social-text">You can always find me on:</Lettering>
                                <Social>
                                    <div className="items">
                                        <IconLink href="https://twitter.com/AmanhaEuMudo" target="blank">
                                            <FiTwitter style={{color:"#1DA1F2"}}></FiTwitter>
                                        </IconLink>
                                    </div>
                                    <div className="items">
                                        <IconLink href="https://www.instagram.com/amanhaeupedro/" target="blank">
                                            <FiInstagram style={{color:"#C13584"}}></FiInstagram>
                                        </IconLink>
                                    </div>
                                    <div className="items">
                                        <IconLink href="https://github.com/ptmarmello" target="blank">
                                            <FiGithub style={{color:"#24292e"}}></FiGithub>
                                        </IconLink>
                                    </div>
                                    <div className="items">
                                        <IconLink href="https://www.youtube.com/channel/UCTCIwlkSVtHEtcFffL6zHTA" target="blank">
                                            <FiYoutube style={{color:"#FF0000"}}></FiYoutube>
                                        </IconLink>
                                    </div>
                                    <div className="items">
                                        <IconLink href="https://open.spotify.com/show/3cvgbNlsFUZHtVqSO6RWhh" target="blank">
                                            <ImSpotify style={{color:"#1DB954"}}></ImSpotify>
                                        </IconLink>
                                    </div>
                                </Social>
                                
                            </div>
                            <div className="buttons-display">
                                <IconLink href="https://calendly.com/pedrothiago/60min" target="blank" ><Button left active>Schedule</Button></IconLink>
                                <IconLink as={Link} to="/projects"><Button left normal>Portfolio</Button></IconLink>
                            </div>

                        </div>
                        
                    </section>
                        <LateralHome/>
                        {/* <img src={foto} alt="Sua Foto Ficaria Aqui"/> */}
                        {/* Vou colocar aqui alguns slides, ou uma foto minha */}
                </div>
            </div>
            
        </div>
    );
}