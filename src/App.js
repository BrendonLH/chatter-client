import { useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = io('https://chatter-server-bh.herokuapp.com/');

    socket.on('connected', (response) => {
      console.log(response);
    })
  }, [])

  
  return (
    <div className="App">
      <h1>Chatter client</h1>
    </div>
  );
}

export default App;
