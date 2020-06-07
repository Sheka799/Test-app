import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Form from './components/Form/Form'
import Character from './components/Сharacter/Сharacter'
import './App.scss';



function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path={'/'} exact component={Form}/>
          <Route path={'/:name'} component={Character}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
