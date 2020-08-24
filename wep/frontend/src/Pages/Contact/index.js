import React from 'react';
import './styles.css';

import NavBar from '../../components/Nav';
import Container from '../../components/Container';

import {Link} from 'react-router-dom';

export default function ContactPage(){
    return(
        <div className="App">
            <NavBar/>
            <Container head="Contact Me">
            <div className="register-container">
            <div className="contain">
                <section>
                    <p>Estamos procurando pessoas que se envolvam, sejam dedicadas e tenham o espírito de mudança assim como a gente!
                        Se deseja saber mais sobre nossa visão e sobre nosso espírito de mudança:</p>
                </section>
                <form id="SignupForm" >
                    <input placeholder="Nome" type="text"/>
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="Assunto" type="text"/>
                    <div className="input-group">
                        <input placeholder="Cidade" type="text"/>
                        <input placeholder="UF" style={ { width:80} }/>
                    </div>
                    
                    <textarea placeholder="Digite aqui a sua mensagem" name="reason" form="SignupForm"></textarea>
                    <Link className="button" to="/">Enviar.</Link>                
                </form>
                
            </div>
        </div>
    

            </Container>
        </div>
    );
}