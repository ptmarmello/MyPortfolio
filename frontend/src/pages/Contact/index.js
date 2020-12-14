import React from  'react';
import styled from 'styled-components';
import Template from '../../components/Templates';
import Form from './Forms';

const Box = styled.div `
    display: block;
    width:100%;
    height: 100%;
    margin: 0 auto;
    max-height: calc(98%-100px);
    justify-content: center;
    align-content: center;
    text-align: left;
    padding:0;
    padding-left: 1em;
    font-size: 0.75rem;

    ${props => props.left &&`
        margin-right:1em;
    `}
    ${props => props.right &&`
        padding:0;
        margin-left:1em;
    `}
`;

export default function Contact(){
    return(
        <Template headerTitle="Contact Me" headerLink="/contact" >
            <Box right>

            </Box>
            <Box left>
                <Form/>
            </Box>

        </Template>
    );
}