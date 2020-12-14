import React from  'react';
import styled from 'styled-components';
import Template from '../../components/Templates';
import { Link } from 'react-router-dom';


export default function More(){
    return(
        <Template headerTitle="More About Me?" headerLink="/more" >
            <section>
                <Link to="/more/Podcast">Podcast</Link>
            </section>
            <section>
                <Link to="/more/Ambassador">Ambassador</Link>
            </section>
            <section>
                <Link to="/more/Youtube">Youtube</Link>
            </section>
        </Template>
    );
}