import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from '../views/HomePage';
import DeckBrowserPage from '../views/DeckBrowserPage';
import LoginPage from '../views/LoginPage';
import ReaderPage from '../views/ReaderPage';
import SignUpPage from '../views/SignUpPage';
import LeaderboardPage from '../views/LeaderboardPage';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/signup' Component={SignUpPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/' Component={HomePage} />
        <Route path='/dashboard' Component={HomePage} />
        <Route path='/decks' Component={DeckBrowserPage} />
        <Route path='/leaderboard' Component={LeaderboardPage} />
        <Route path='/reader/:deckID/:cardID' Component={ReaderPage} />
    </Routes>
  )
}
