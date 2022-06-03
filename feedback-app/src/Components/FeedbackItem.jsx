import React from 'react'
import Card from './Shared/Card'

function FeedbackItem({itemProp}) {



  return (

    <Card >
     <div className="num-display">{itemProp.rating}</div>
      <div className="text-display">
       {itemProp.text}
     </div>
   
    </Card>
  )
}

export default FeedbackItem