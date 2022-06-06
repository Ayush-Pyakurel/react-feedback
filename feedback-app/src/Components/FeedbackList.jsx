import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'


function FeedbackList({feedbackProps, handleDeleteItem}) {
 //console.log(feedback);
 if(!feedbackProps || feedbackProps.length === 0){
  return <p>There is no feedback yet!</p>
 }
  return (
    <div className='feedback-list'>
     {feedbackProps.map((item)=> (
      <FeedbackItem key={item.id} itemProp={item} handleDeleteList={handleDeleteItem}/>
     ))}
   
    </div>
  )
}

FeedbackList.propTypes = {
 feedback: PropTypes.array
}

export default FeedbackList