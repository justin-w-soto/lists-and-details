import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimalCrossingContainer from '../../containers/AnimalCrossingContainer';

export default function App() {


  return (
    <section className='app'>

    <BrowserRouter>
    
      <Switch>

          <Route exact path="/" component={AnimalCrossingContainer}/>

      </Switch>
      
    
    </BrowserRouter>



    </section>
  )
  
}
