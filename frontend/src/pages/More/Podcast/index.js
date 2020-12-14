'use strict';

import React from 'react';
import ScriptTag from 'react-script-tag';
import { Helmet } from 'react-helmet';

// import './podFunc.js';
import './Podcast.css';

export default function Podcast(){

    return(
        <>
            <div class="player">
                <canvas></canvas>
                <div class="song">
                    <div class="artist">Kavinsky</div>
                    <div class="name">Odd Look ft. The Weeknd</div>
                </div>
                <div class="playarea">
                    <div class="prevSong"></div>
                    <div class="play"></div>
                    <div class="pause"></div>
                    <div class="nextSong"></div>
                </div>
                <div class="soundControl"></div>
                <div class="time">00:00</div>
                <Helmet>
                    <title>Amanha Eu mudo -  Podcast</title>
                </Helmet>
            </div>
            <ScriptTag type="text/javascript" src='./Podcast/podFunc.js' />

        </>
    );
}