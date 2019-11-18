import React from 'react';


const FeedBackButton = (prop) =>{
    const {nameButton, onClick} = prop
    return <button onClick={onClick}>{nameButton}</button>
}


export default FeedBackButton
