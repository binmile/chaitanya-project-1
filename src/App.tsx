import React, { Component } from 'react';
import './App.css';
import {personName} from "./component/DummyData";
import { nameList } from './component/DummyData';
import { Greet } from './component/Greet';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { Status } from './component/Status';
import { Heading } from './component/Heading';
import { Oscar } from './component/Oscar';
import { Button } from './component/Button';
import { Input } from './component/Input';
import { useState } from 'react';
import { Container } from './component/Container';
import LifecycleA from './component/LifecycleA';
import  HookCounter from './component/HookCounter';
import HookCounter2 from './component/HookCounter2';
import HookCounterThree from './component/HookCounterThree';
import HookCounter4 from './component/HookCounter4';
import HookCounterOne from './component/HookCounterOne';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';

function App() {
  const [value, setValue] = useState("");  // setvalue is not a variable it is a function
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }


  return (
    <div className="App">
      <IntervalHookCounter/>
      <MouseContainer/>
      <HookCounterOne></HookCounterOne>
      <HookCounter4/>
      <HookCounterThree></HookCounterThree>
      <HookCounter2></HookCounter2>
      <HookCounter></HookCounter>
      <LifecycleA/>
      <Container styles={{border: '1px solid black', padding: '1 rem', backgroundColor:'#2e5d78'}}/>
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
