import React from 'react';
import './App.css';

import Register from './components/Register.js';
import Login from './components/Login.js';

import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container textAlign={'center'}>
      <Login />
      <Register />
    </Container>
  );
}

export default App;
