import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import CommentsPage from '../CommentsPage/CommentsPage';
import FeelingPage from '../FeelingPage/FeelingPage';
import SupportPage from '../SupportPage/SupportPage';
import UnderstandPage from '../UnderstandPage/UnderstandPage';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <CommentsPage />
      <FeelingPage />
      <SupportPage />
      <UnderstandPage />
    </div>
  );
}

export default App;
