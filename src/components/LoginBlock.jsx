import React, { useState } from 'react';
import socket from '../socket.js';
import axios from 'axios';

const LoginBlock = () => {
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const onEnter = () => {
    if(!roomId || !userName) {
      return console.log('You have entered empty username or password')
    }
    axios.post('/rooms', {
      roomId,
      userName
    })
  }

  return (
    <div>
      <div className="join-block">
        <input type="text" placeholder="Room ID" onChange={e => setRoomId(e.target.value)} value={roomId}></input>
        <input type="text" placeholder="Your name" onChange={e => setUserName(e.target.value)}value={userName}></input>
        <button className="btn btn-success" onClick={onEnter}>LOG IN</button>
      </div>
    </div>
  );
};

export default LoginBlock;