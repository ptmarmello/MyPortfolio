import React from 'react';
import './styles.css';

export default function Container({head, children}){
    
    return(
        <div className="App-Container">
            <div className="container-page-header">{head}</div>
            <div className="container-page-children">
                {children}
            </div>
        </div>
    );
}