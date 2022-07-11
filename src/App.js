import './App.css';
import { io } from 'socket.io-client';
import LoginBlock from './components/LoginBlock.jsx';
import { useReducer } from 'react';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="wrapper">
      <LoginBlock />
    </div>
  );
}

export default App;
