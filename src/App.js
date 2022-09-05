import { Routes, Route, Link } from 'react-router-dom';
import ChatPage from './pages/chats';
import {useState} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {
  return (
    <>
      <Link to="/Chats">Chats</Link>
      <Link to="/Profile">Profile</Link>
      <Routes>
        <Route path='/Chats' element={<ChatPage />} />
        <Route path='/Profile'/>
        <Route path='/Chats/*' element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
