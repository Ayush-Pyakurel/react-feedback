import React from 'react'
import Card from './Shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({itemProp, handleDeleteList}) {

  return (

    <Card >
     <div className="num-display">{itemProp.rating}</div>
     <button className="close" onClick={()=>{handleDeleteList(itemProp.id)}}>
      <FaTimes color='purple'/>
     </button>
      <div className="text-display">
       {itemProp.text}
     </div>
   
    </Card>
  )
}

FeedbackItem.propTypes = {
 itemProp: PropTypes.object
}

export default FeedbackItem