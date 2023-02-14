import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error404 from './Pages/Error404';
import ProjectsPage from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact/index';

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