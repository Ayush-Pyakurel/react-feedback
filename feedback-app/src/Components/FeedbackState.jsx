import React from 'react'
import propTypes from 'prop-types'

function FeedbackState({feedbackState}) {

 let average = feedbackState.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue.rating 
 }, 0) / feedbackState.length

 average = average.toFixed(1);

  return (
   <div className='feedback-stats'>
    <h4>{feedbackState.length} Review</h4>
    <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
   </div>
  )
}

FeedbackState.propTypes = {
 feedbackState : propTypes.array.isRequired
}

export default FeedbackState