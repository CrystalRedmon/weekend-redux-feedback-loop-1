import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import CommentsPage from '../CommentsPage/CommentsPage';
import FeelingsPage from '../FeelingsPage/FeelingsPage';
import SupportPage from '../SupportPage/SupportPage';
import UnderstandPage from '../UnderstandPage/UnderstandPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';


function App() {

  return (
    <Router>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

      <Route path='/FeelingsPage' exact>
        <FeelingsPage />
      </Route>
      
      <Route path='/CommentsPage' exact>
        <CommentsPage />
      </Route>

      <Route path='/supportpage' exact>
        <SupportPage />
      </Route>

      <Route path='/UnderstandingPage' exact>
        <UnderstandPage />
      </Route>

      <Route path='/ReviewPage' exact>
        <ReviewPage />
      </Route>

      <Route path='/ThankYouPage' exact>
        <ThankYouPage />
      </Route>
      
      </div>

    </Router>
  );
}

export default App;
