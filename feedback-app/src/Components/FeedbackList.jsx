import React from 'react'
import FeedbackItem from './FeedbackItem'


function FeedbackList({feedback}) {
 //console.log(feedback);
 if(!feedback || feedback.length === 0){
  return <p>There is no feedback yet!</p>
 }
  return (
    <div className='feedback-list'>
     {feedback.map((item)=> (
      <FeedbackItem key={item.id} itemProp={item}/>
     ))}
   
    </div>
  )
}

export default FeedbackList