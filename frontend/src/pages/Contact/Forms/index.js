import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import './Forms.css';

const StyForms = styled.form `
    position: relative;
    display: block;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    margin-top: 2.5em;
    width: 90%;
    height: 100%;
    padding: 0;
    background: transparent;
    text-rendering: optimizelegibility;

    &:before,
    &:after {
        box-sizing: border-box;
        padding: 0;
        appearance: none;
        font-size: 1rem;
        font-weight: 300;
        font-family: "Red Hat Text", sans-serif;
        border: 0;
        box-shadow: 0;
        pointer-events: none;

        text-rendering: optimizelegibility;
    }

    & input{
        width: 75%;
        min-height: 3.5em;
        margin-top: 0.4em;
        margin-bottom: 0.4em;
        box-sizing: border-box;
        box-shadow: none;
        border-radius: 8px;
        outline: none;
    }

    & textarea{
        width: 75%;
        min-height: 12em;
        margin-top: 0.4em;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
    }
`;

export default function Form(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <StyForms onSubmit={handleSubmit(onSubmit)}>
           <input type="text" defaultValue="" ref={register({ required: true })} name="Name" autoCapitalize="on" autoComplete="on" autoSave="true" />
                <label for="Name">Name</label> <small>Your Name</small>

           <input type="text" defaultValue="" ref={register({ required: true })} name="Description" autoCapitalize="on" autoComplete="on" autoSave="true"  />
                <label for="Description">Description</label> <small>What is it about?</small>
           <input type="email" defaultValue="" ref={register({ required: true })} name="Email" autoCapitalize="on" autoComplete="on" autoSave="true"  />
                <label for="Email">Email</label> <small>Contact Email</small>

           <input type="telephone" defaultValue="" ref={register} name="Telephone" autoCapitalize="on" autoComplete="on" autoSave="true" />
                <label for="Telephone">Telephone</label> <small>Contact Phone</small>

            <textarea name="Message" ref={register({ required: true })}  />
                <label for="Message">Message</label> <small>Okay, what's your message?</small>
            
            <button type="submit">Enviar</button>
        </StyForms>
    );
}