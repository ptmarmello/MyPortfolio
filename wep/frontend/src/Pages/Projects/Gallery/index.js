import React from 'react';
import './styles.css'

import SliderGallery from '../../../components/Slider';

export default function ProjectGallery({head}){
    return(
        <>
            <SliderGallery head="Videos" numToShow={4} numToScroll={2}/>

            <SliderGallery head="Podcasts" numToShow={2} numToScroll={2}/>

        
        </>
    );
}