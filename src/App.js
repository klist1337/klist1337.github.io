import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Cours from './components/pages/Services';
import Formateur from './components/pages/Products';
import NousJoindre from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Mathematiques from './components/pages/Marketing';
import SciencesPhysique from './components/pages/Consulting';
import Inscription from './components/pages/Inscription';
import Litteratures from './components/pages/Design';
import Informatiques from './components/pages/Development';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/home' component={Home} />
      <Route path='/inscription' component={Inscription} />
        <Route path='/cours' component={Cours} />
        <Route path='/formateur' component={Formateur} />
        <Route path='/nous-joindre' component={NousJoindre} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/mathematiques' component={Mathematiques} />
        <Route path='/sciences-physique' component={SciencesPhysique} />
        <Route path='/litteratures' component={Litteratures} />
        <Route path='/informatiques' component={Informatiques} />
      </Switch>
    </Router>
  );
}

export default App;
