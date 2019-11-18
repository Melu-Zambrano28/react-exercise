import {React, useState }from 'react'; 

const ComplextState = (props) =>{
    
    const [left, setLeftState] = useState(0);
    const [right, setRightState] = useState(0)
    return (
        <div>
            <h1>Left : {left}</h1>
            <button onClick ={() => setLeftState(left + 1) }> Left Buttom : </button>
            <h1>Right: </h1>
            <button onClick ={() => setRightState(right + 1) }> Left Buttom : </button>
        </div>
    )
}

export default ComplextState;