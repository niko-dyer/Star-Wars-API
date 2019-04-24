import React from 'react';
import { Route } from 'react-router-dom'
import People from './components/People'
import Home from './components/Home'
import Planets from './components/Planets'
import Navbar from './components/Navbar'
import PlanetShow from './components/PlanetShow'
import { Image } from 'semantic-ui-react'


function App() {
  return (
    <>
      <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/people' component={People} />
        <Route exact path='/planets' component={Planets} />
        <Route exact path='/planets/:id' component={PlanetShow} />
    </>
  );
}

export default App;
