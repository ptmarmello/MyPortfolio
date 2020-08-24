import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MorePage from './pages/More';
import ContactPage from './pages/Contact';
import SkillsPage from './pages/Skills';
import ProjectPage from './pages/Projects';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/aboutme" exact component={About}/>
                <Route path="/more" exact component={MorePage}/>
                <Route path="/contact" exact component={ContactPage}/>
                <Route path="/skills" exact component={SkillsPage}/>
                <Route path="/projects" exact component={ProjectPage}/>
            </Switch>
        </BrowserRouter>
    );
}