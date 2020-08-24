import React from  'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles.css';

const MainHeader = styled.header `

    display: inline-flex;
    position: relative;
    
    width: 83%;
    height: 64px;
    margin:0;
    padding:0;
    top:0px;
    font-size: 30px;
    text-align: left;

    align-items:center;
    align-content: center;

`;

const HeaderText = styled(Link) `
    font-weight: bold;
    text-decoration: none;
    outline: none;
    color: blueviolet;

    &:hover{
        border-radius: 8px;
        color: palevioletred;
        border-bottom: 3px solid blueviolet;
        transition:0.2s linear;
    }
`;

class NewHeader extends React.Component{
    render(){
        return(
            <MainHeader>
               <HeaderText to={this.props.headerLink}>
                    {this.props.headerText}
                </HeaderText>
            </MainHeader>
        );
    };
}

export default function Template({children, headerTitle, headerLink}){
    return(
        <div className="App-content">
            <Navbar/>
            <div className="App-main-container" style={{display: 'inline-block'}}>
                <NewHeader headerText={headerTitle} headerLink={headerLink} />
                <div className="template-container">
                    {children}
                </div>
            </div>
        </div>
    );
}