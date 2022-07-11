import './App.css';
import { io } from 'socket.io-client';
import LoginBlock from './components/LoginBlock.jsx';

function App() {
  return (
    <div className="wrapper">
      <LoginBlock />
    </div>
  );
}

export default App;
