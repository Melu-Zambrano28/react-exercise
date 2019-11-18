import React from 'react'


const StatisticBox = (prop) =>{
    const  {countGood, countNeutral,countBad} = prop
        return (
        <div>
           <p>Good :  {countGood}</p> 
            <p>Neutral :  { countNeutral}</p>
            <p>Bad :  { countBad} </p>
        </div>
    )
}


export default StatisticBox