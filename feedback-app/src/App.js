import './App.css';
//import FeedbackItem from './Components/FeedbackItem';
import { useState } from 'react';
import FeedbackData from './Data/feedback';
import FeedbackList from './Components/FeedbackList';

import Header from './Components/Header';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
