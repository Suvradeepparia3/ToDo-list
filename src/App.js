import React from 'react';
import Card from './Card';
import { Grid } from '@material-ui/core';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <ul>
      <div className="header">A To-do list App made with React and Material-ui.</div>
      </ul>
      <Grid container justify="center" >
        <Grid item lg={4} md={6} xs={10}>
        <Card  />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
