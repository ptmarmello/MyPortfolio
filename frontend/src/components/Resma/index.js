import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import './resma.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//     // '&:hover':{
//     //   backgroundColor: 'red',
//     // }
//   },
// }));

const Papier = styled.div `
    display: flex;
    border-radius: 12px;
    text-align: center;
    justify-content: center;
    align-content: center;
    transition: 0.4s;
    & > *{
      margin: 0.75em;
      width: 8em;
      height: 8em;
    }

    ${props => props.orange &&`
        &:hover{
          background: orange;
        }
        &:active{
          background:rgb(224, 147, 3);
          width: 148px;
          height: 148px;
        }
    `}
    ${props => props.purple &&`
        &:hover{
          background: palevioletred;
        }
        &:active{
          background:rgb(158, 81, 107);
          width: 148px;
          height: 148px;
        }
    `}


`;



export default function ThePaper({children}) {
  // const classes = useStyles();

  return (
    <Papier purple>
      <Paper className="paperStyle" elevation={9}>
        {children}
      </Paper>
    </Papier>
  );
}