import React from 'react';
import './App.css';

import RestrictedRoute from './components/RestrictedRouter.js';

import Register from './components/Register.js';
import Login from './components/Login.js';
import Jokes from './components/Jokes.js';

import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container textAlign={'center'}>
      <Login />
      <Register />
      <RestrictedRoute path='/jokes' component={Jokes} />
    </Container>
  );
}

export default App;
