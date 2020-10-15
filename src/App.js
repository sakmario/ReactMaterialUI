import React, {Component} from 'react';
import NavBar from './components/NavBar'
import './App.css';
import {ThemeProvider} from '@material-ui/core'
import theme from './components/theme';
import BrandButton from './components/BrandButton'
import {Button} from '@material-ui/core'

function App() {
  return (
    <div>
    
    <ThemeProvider theme={theme}>
      <NavBar color='primary'>Ahoj</NavBar>
      <BrandButton color='primary'>Home</BrandButton>
      <BrandButton color='primary'>Drills</BrandButton>
      <BrandButton color='primary'>Timetable</BrandButton>
      <BrandButton color='primary'>Chat</BrandButton>
      <Button>Delete</Button>
    </ThemeProvider>
    </div>
  );
}

export default App;
