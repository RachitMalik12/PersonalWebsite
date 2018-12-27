import React from 'react';
import LandingPage from './landingpage';
import Education from './Education';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

import {Switch, Route} from 'react-router-dom';



const Main =() => (
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route  path = "/education" component = {Education} />
    <Route  path = "/contact" component = {Contact} />
    <Route  path = "/projects" component = {Projects} />
    <Route  path = "/resume" component = {Resume} />
  </Switch>


)
export default Main;
