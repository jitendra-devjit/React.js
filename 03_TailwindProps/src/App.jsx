import React from 'react';
import './App.css';
import Nav from './Nav';
import Card from './Card';

function App() {
  

  return (
    <>
      <Nav />
      <Card  username = "Janit" description = "hi cute cat!" visitesite = "Visit me"/>
      <Card  username = "Jitendra" description = "hi fatty shy cat!" />
    </>
  )
}

export default App;
