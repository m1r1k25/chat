import React from 'react';
import socket from './socket.js';

const LoginBlock = () => {
  return (
    <div>
      <div className="join-block">
        <input type="text" placeholder="Room ID" value=""></input>
        <input type="text" placeholder="Your name" value=""></input>
        <button className="btn btn-success">LOG IN</button>
      </div>
    </div>
  );
};

export default LoginBlock;