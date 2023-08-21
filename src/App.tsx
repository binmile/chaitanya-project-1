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
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useState } from 'react';
import { Container } from './components/Container';

function App() {
  const [value, setValue] = useState("");  // setvalue is not a variable it is a function
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }


  return (
    <div className="App">
      <Container styles={{border: '1px solid black', padding: '1 rem'}}/>
      <Button handleClick={(event,id) => {
        console.log('Button Clicked', event)
      }}/>

      <Greet name='Chaitan' messageCount={1} isLoggedin={true}></Greet>
      <Person firstName={personName.firstName}lastName={personName.lastName}></Person>      <PersonList names = {nameList}/>
      <Status status='success'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>
                 Oscar goes to Leonardo Dicaprio!
        </Heading>
      </Oscar>
      <Input value={value} handleChange={handleChange}/>
    </div>
  );
}

export default App;
