import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';




function App() {
  return (
    <div className="App"> 
    <Counter></Counter>
      <Message></Message>
      <Functionclick></Functionclick>
      {/* <Greet></Greet>
      <Welcome></Welcome> */}
      {/* <Hello name="sd" superName = "g">
        <p>Dont steel</p>
      </Hello>
      <Hello name="sa" superName="fb" >
        <button>action</button>
      </Hello>
      <Hello name="ka" superName="Na"/>
      <Welcome name="class"></Welcome> */}
    </div>
  );
}

export default App;
