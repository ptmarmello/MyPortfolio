import React from 'react';
// import './styles.css';

import Navbar from '../../components/Nav';
import ProjectGallery from './Gallery';
import Container from '../../components/Container';


export default function ProjectsPage(){
    return(
        <div className="App">
            <Navbar/>
            <Container head="Previous Projects">
                <ProjectGallery head="Frontend"/>
                
            </Container>
        </div>
    );
}