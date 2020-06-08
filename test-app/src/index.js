import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {createStore} from 'redux'
import reducer from './redux/reducer'
import Form from '../src/components/Form/Form'
import Character from '../src/components/Сharacter/Сharacter'

const store = createStore(reducer)

ReactDOM.render(
  <BrowserRouter>
    <App>
    <Switch>
          <Route path="/" exact component={Form}/>
          <Route path="/:name" component={Character}/>
      </Switch>
      </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
