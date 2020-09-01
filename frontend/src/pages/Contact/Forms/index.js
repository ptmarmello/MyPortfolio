import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';


const StyForms = styled.form `
    display: block;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
    height: 75%;
    padding: 0;
    background: transparent;

    & input{
        width: 33%;
        min-height: 4.5em;
        margin-top: 0.4em;
        margin-bottom: 0.4em;

        border-radius: 8px;
        outline: none;
    }

    & textarea{
        width: 100%;
        min-height: 5em;
        margin-top: 0.4em;

        border-radius: 8px;
        outline: none;
    }
`;



export default function Form(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <StyForms onSubmit={handleSubmit(onSubmit)}>
            <input type="text" defaultValue="" ref={register({ required: true })} name="Name" placeholder="Tell me your name" />
            <input type="text" defaultValue="" ref={register({ required: true })} name="Description" placeholder="What is it about?" />
            <input type="email" defaultValue="" ref={register({ required: true })} name="email" placeholder="Tell me your email" />
            <input type="telephone" defaultValue="" ref={register} name="wpp" placeholder="How about your main Phone Number?" />

            <textarea ref={register({ required: true })}  />

            <button type="submit">Enviar</button>

        </StyForms>
    );
}