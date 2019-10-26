import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Accueil from './accueil';
import Projets from './projets';
import Cv from './cv';
import Contact from './contact';
const Main = () => (
    <Switch>
        <Route exact path="/" component={Accueil}></Route>
        <Route exact path="/projets" component={Projets}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/cv" component={Cv}></Route>

    </Switch>
);

export default Main;