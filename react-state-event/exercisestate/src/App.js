//import React from 'react';
import './App.css';
import FeedBackButton from './components/FeedBackButton'
import StatisticBox from './components/StatisticBox'
import React,{ useState } from 'react';

function App() {
  const [countBad, setCountBad] =  useState(0)
  const [countGood, setCountGood] =  useState(0)
  const [countNeutral, setCountNeutral] =  useState(0)

  return (
    <div className="App">
      <h1>Give FeedBack</h1>
      <FeedBackButton nameButton="good" onClick={() =>{setCountGood(countGood+1)}}/>
      <FeedBackButton nameButton="neutral" onClick={() =>{setCountNeutral(countNeutral+1)}}/>
      <FeedBackButton nameButton="Bad" onClick={() => {setCountBad(countBad+1)}}/>
      <StatisticBox countGood={countGood} countNeutral={countNeutral} countBad={countBad}/>
      
    </div>
  );
}

export default App;
