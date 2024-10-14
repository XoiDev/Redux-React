import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import {toggleDarkMode} from "./redux-toolkit/globalSlice"
function App() {
  const globalOptions = useSelector((state)=> state.global)
  const dispatch = useDispatch()
  const handleDarkMode = ()=>{
    dispatch(toggleDarkMode(true))
  }
  
  return (
    <div className='mt-10'>
       <h2>this is value:</h2>
        <Counter>
        </Counter>
        <button onClick={handleDarkMode} className="text-white bg-blue-400 border border-gray-300" >toggle darkmode</button>
    </div>
  );
}

export default App;
