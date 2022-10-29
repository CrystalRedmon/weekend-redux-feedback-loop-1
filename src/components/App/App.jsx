import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import CommentsPage from '../CommentsPage/CommentsPage';
import FeelingsPage from '../FeelingsPage/FeelingsPage';
import SupportPage from '../SupportPage/SupportPage';
import UnderstandPage from '../UnderstandPage/UnderstandPage';


function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

      <Route path='/FeelingPage' exact>
        <FeelingsPage />
      </Route>
      
      <Route path='/CommentsPage' exact>
        <CommentsPage />
      </Route>

      <Route path='SupportPage' exact>
        <SupportPage />
      </Route>

      <Route path='/UnderstandingPage' exact>
        <UnderstandPage />
      </Route>
      </div>
    <Router />
  );
}

export default App;
