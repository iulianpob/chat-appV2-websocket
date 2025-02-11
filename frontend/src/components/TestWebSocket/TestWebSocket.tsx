import { useState } from 'react';
import { useWebSocket } from '../../hooks/useWebSocket';

export const TestWebSocket = () => {
  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage } = useWebSocket('ws://localhost:3000'); // Folosește hook-ul

  const handleSendMessage = () => {
    sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1>WebSocket Test</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
