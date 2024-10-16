import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getNews } from './sagas/news/newsSlice';
import HackerNews from './components/HackerNews';
function App() {
  const globalOptions = useSelector((state) => state.global);

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getNews())
  },[dispatch])
  return (
  
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
