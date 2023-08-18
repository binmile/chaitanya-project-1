import React, { Component } from 'react';
import './App.css';
import {personName} from "./components/DummyData";
import { nameList } from './components/DummyData';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  return (
    <div className="App">
      <Greet name='Chaitan' messageCount={1} isLoggedin={true}></Greet>
      <Person name = {personName}></Person>
      <PersonList names = {nameList}/>
    </div>
  );
}

export default App;
