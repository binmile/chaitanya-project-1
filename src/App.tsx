import React, { Component } from 'react';
import './App.css';
import {personName} from "./components/DummyData";
import { nameList } from './components/DummyData';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

function App() {
  return (
    <div className="App">
      <Greet name='Chaitan' messageCount={1} isLoggedin={true}></Greet>
      <Person firstName={personName.firstName}lastName={personName.lastName}></Person>      <PersonList names = {nameList}/>
      <Status status='success'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>
                 Oscar goes to Leonardo Dicaprio!
        </Heading>
      </Oscar>
    </div>
  );
}

export default App;
