import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import {toggleDarkMode} from "./redux-toolkit/globalSlice"
import Card from './components/Card';
function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("App ~ globalOptions", globalOptions);
  // const handleToggleDarkmode = () => {
  //   dispatch(toggleDarkMode(true));
  // };

  return (
    <div>
      <Card></Card>
      <Counter></Counter>
    </div>
  );
}

export default App;
