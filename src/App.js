/* eslint-disable */
import React, { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Headers  from './component/Header';
import CarList  from './component/CarList';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers/>
        <Switch>
          <Route exact path="/">
            
          </Route>
          <Route path="/carList">
            <CarList/>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}
 
export default App;
