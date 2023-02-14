
import React from 'react';
import Hero from '../Hero';


export function Left() {
    return(
        <>
            <p>Left</p>
        </>
    );
}

export function Right(){
    return(
        <>
            <p>right</p>
        </>
    );
}

export default function Whoiam() {
  return (
    <Hero left={<Left />} right={<Right/>} />
  );
}
