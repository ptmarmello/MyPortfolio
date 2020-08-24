import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error404 from './Error404';
import ProjectsPage from './Projects';
import About from './About';
import Contact from './Contact/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ProjectsPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/about" component={About} />
                <Route path="/contact" component={Contact}/>
                <Route component={Error404}/>
            </Switch>
        </BrowserRouter>
    );
}