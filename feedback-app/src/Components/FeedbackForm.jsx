import React from 'react';
import Card from './Shared/Card';
import { useState } from 'react';
import Buttons from './Shared/Buttons';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisables] = useState(true);
  const [message, setMessage] = useState();

  const handleInputText = (e) => {
    if (text === '') {
      setBtnDisables(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisables(true);
      setMessage('You must enter atleast 10 characters!');
    } else {
      setBtnDisables(false);
      setMessage('');
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h4>How would you rate your service with us?</h4>
        {/* {@todo - rating select components} */}
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write your review'
            onChange={handleInputText}
            value={text}
          />
          <Buttons type='submit' isDisabled={btnDisabled}>
            Submit
          </Buttons>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
