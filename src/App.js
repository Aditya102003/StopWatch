
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const  [time,setTimer] = useState(0)
  const [running,setRunning] = useState(false)

  useEffect (() =>{
let interval;
if(running){
  interval = setInterval(() =>{
    setTimer ((prevTime) => prevTime  + 10);
  },10)
}
else if (!running){
  clearInterval(interval);
}
return () => clearInterval(interval);
  },[running]);


  return (
    <div className = "watch-container">
  
<div className = "watch"> STOP WATCH</div>
<div>
  <span>{("0" + Math.floor((time/60000)%60)).slice(-2)} : </span>
  <span>
    {("0"+ Math.floor((time/1000)%60)).slice(-2)}:
  </span>
  <span>
  {("0"+ Math.floor((time/10)%100)).slice(-2)}:
  </span>
</div>
<div >

  {
  running ?   ( <button  onClick = {() =>{setRunning(false)}}>STOP</button>) : ( 
  <button onClick = {() =>{setRunning(true)}}>START</button>)
  }
 
 
  <button onClick = {() => {setTimer(0)}}>RESET</button>
</div>
    </div>
    
  )

};


export default App;
