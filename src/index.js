import React from 'react'
import ReactDOM from 'react-dom'

let Header = (props)=>{
  return <h1>{props.course}</h1>
}

let Content = (props)=>{
  return <p>Part of course :{ props.part} context :{props.content}</p>
}

let Total = (props) =>{
  return <p>{props.sum}</p>
}

let Part = (props)=>{
  return (
    <div>
      <p>
        <Content part={props.part} content={props.exercises}/>
      </p></div>);
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
     <Header course={course} />
     <Content part={part1} content={exercises1}/>
     <Content part= {part2} content={exercises2}/>
     <Content part={part3} content={exercises3}/>
     <p>Number of exercises <Total sum ={exercises1 + exercises2 + exercises3}/></p>

     <h1>Exercises 2: </h1>
     <p>Refactor the Content component so that it does not render any names of parts or their number of exercises by itself.<br></br>
        Instead it only renders three Part components of which each renders the name and number of exercises of one part
      </p>

      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
      
    
   
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))