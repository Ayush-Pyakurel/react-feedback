import './App.css';
//import FeedbackItem from './Components/FeedbackItem';
import { useState } from 'react';
import FeedbackData from './Data/feedback';
import FeedbackList from './Components/FeedbackList';

import Header from './Components/Header';
import FeedbackState from './Components/FeedbackState';
import FeedbackForm from './Components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // const refreshPage = () => {
  //   setTimeout(() => {
  //     return window.location.reload(true);
  //   }, 10000);
  // };
  // refreshPage();

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete the item?')) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackState feedbackState={feedback} />
        <FeedbackList
          feedbackProps={feedback}
          handleDeleteItem={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
