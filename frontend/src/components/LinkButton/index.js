import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled(Link)`
    width: 150px;
    height: 60px;
    font-size: 20px;
    font-weight: 600px;
    background: transparent;
    border-radius: 50px;
    border: 3px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    outline: none;
    cursor: pointer;
    transition: 0.2s;

    ${props => props.active &&`
        background: palevioletred;
        color: white;

        &:hover{
            background: white;
            color: palevioletred;
        }
    `}

    ${props => props.normal &&`
        background: white;
        color: palevioletred;

        &:hover{
            background: palevioletred;
            color: white;
        }
    `}

    ${props => props.left &&`
        margin-left:0;
    `}

    ${props => props.right &&`
        margin-right:0;
    `}

    &:active{
        width: 140px;
        height: 50px;
        font-size: 12px;
    }
`

export default LinkButton;