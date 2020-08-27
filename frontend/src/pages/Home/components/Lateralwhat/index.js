import React from  'react';
import styled from 'styled-components';
import ThePaper from '../../../../components/Resma';

const Lateral = styled.div `
    margin: 0;
    margin-right: 8vw;
    margin-bottom: 5vh;
`;

const Resma = styled.div `
    display: flex;
    /* & > *{
        
    } */

`;


export default function LateralHome(){

    return(
        <>
            <Lateral>
                <Resma>
                    <ThePaper>
                        <h3 className="paperText">
                            Engineering Student
                        </h3>
                    </ThePaper>
                    <ThePaper>
                        <h3 className="paperText">
                            Frontend Developer
                        </h3>
                    </ThePaper>
                    <ThePaper>
                        <h3 className="paperText">
                            Business Developer 
                        </h3>
                    </ThePaper>
                </Resma>
                <Resma>
                    <ThePaper>
                        <h3 className="paperText">
                            MARS Ambassador
                        </h3>
                    </ThePaper>
                    <ThePaper>
                        <h3 className="paperText">
                            {/* Steam Groups Founder */}
                        </h3>
                    </ThePaper>
                    <ThePaper>
                        <h3 className="paperText">
                            {/* Amanhã Eu Mudo Founder */}
                        </h3>
                    </ThePaper>
                </Resma>
                <Resma>
                    <ThePaper>
                        <h3 className="paperText">
                            {/* Podcaster */}
                        </h3>
                    </ThePaper>
                </Resma>
            </Lateral>
        </>
    );
}