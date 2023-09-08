import React, { Component } from 'react';
import './App.css';
// import {UseAuth} from "./component/Auth";
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
// import HookCounter2 from './component/HookCounter2';

import HookCounterThree from './component/HookCounterThree';
import HookCounter4 from './component/HookCounter4';
import HookCounterOne from './component/HookCounterOne';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';
import { OrderSummary } from './component/OrderSummary';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './component/Navbar';
import Nomatch from './component/Nomatch';
import { Products } from './component/Products';
import FeaturedProducts from './component/FeaturedProducts';
import NewProducts from './component/NewProducts';
import { Users } from './component/Users';
import { UserDetails } from './component/UserDetails';
import { Admin } from './component/Admin';
import { Profile } from './component/Profile';
import { Login } from './component/Login';
import ComponentC from './component/ComponentC';
import RefsMemo from './component/RefsMemo';
import CounterThree from './component/CounterThree';
import CounterMain from './component/CounterMain';
import {increment, decrement} from './redux/slices/counter/index'
import { useAppDispatch, useAppSelector } from './redux/hooks';
const LazyAbout = React.lazy(() => import("./component/HookCounter2"))

export const UserContext = React.createContext('chaitan')
export const ChannelContext = React.createContext("react")

function App() {

  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState("");  // setvalue is not a variable it is a function
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const val:string= 'chaitan';


  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={
          <div>
              <UserContext.Provider value={val}>
                <ChannelContext.Provider value={'reactcontext'}>
                  <ComponentC/>
                </ChannelContext.Provider>
              </UserContext.Provider>
              <IntervalHookCounter/>
                <MouseContainer/>
                <HookCounterOne></HookCounterOne>
                <HookCounter4/>
                <HookCounterThree></HookCounterThree>
               
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
 
          <HookCounter4></HookCounter4>
          </div>
          
        }></Route>
        <Route path='about' element={
         <React.Suspense fallback='Loading..'>
          <LazyAbout/>
        </React.Suspense>
        }></Route>
        <Route path='/about/order-summary' element={<OrderSummary/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>} />

          <Route path='featured' element={<FeaturedProducts/>} />
          <Route path='new' element={<NewProducts/>} />

        </Route>
        <Route path="users" element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>} />
          <Route path='admin' element={<Admin/>} />
        </Route>
        <Route path='profile' element={<Profile/>} />
        <Route path='login' element={
        <div>

          <Login/>
          <RefsMemo/>      
        </div>
      } />
      <Route path='reducer' element={<CounterMain/>}/>
      <Route path='redux' element={
        <div>
          <h1>count is {count}</h1>
          <button onClick={()=>dispatch(increment())}>Increment</button>
          <button onClick={()=>dispatch(decrement())}>Decrement</button>

        </div>
      }/>
        
        <Route path='*' element={<Nomatch/>}></Route>
      </Routes>
    </div>
  );



}

export default App;
