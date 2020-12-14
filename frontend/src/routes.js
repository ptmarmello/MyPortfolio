import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MorePage from './pages/More';
import ContactPage from './pages/Contact';
import SkillsPage from './pages/Skills';
import ProjectPage from './pages/Projects';
import Ambass from './pages/More/Ambassador';
import Podcast from './pages/More/Podcast';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/* Tá faltando aqui a Página 404 */}
                <Route path="/" exact component={Home}/>
                <Route path="/aboutme" exact component={About}/>
                <Route path="/contact" exact component={ContactPage}/>
                <Route path="/skills" exact component={SkillsPage}/>
                <Route path="/projects" exact component={ProjectPage}/>
                <Route path="/more" exact component={MorePage}/>
                <Route path="/more/Ambassador" exact component={Ambass}/>
                <Route path="/more/Podcast" exact component={Podcast}/>
                <Route path="/more/Youtube" exact component={MorePage}/>
            </Switch>
        </BrowserRouter>
    );
}