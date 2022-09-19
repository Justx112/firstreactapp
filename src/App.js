import { Routes, Route, Link } from 'react-router-dom';
import ChatPage from './pages/chats';
import {useState} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Profile from './pages/Profile';
import MainPage from './pages/MainPage';
import Users from './pages/Users.js';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/Chats' element={<ChatPage />} />
        <Route path='/Profile' element = {<Profile/>}/>
        <Route path='/Chats/*' element={<ChatPage />} />
        <Route path='/Users' element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
