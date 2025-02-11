import { useEffect, useState, useCallback } from 'react';

export const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  // Gestionează mesajele primite
  const handleMessage = useCallback((event: MessageEvent) => {
    const message = event.data;
    console.log('Received:', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  // Inițializează conexiunea WebSocket
  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log('Connected to the WebSocket server');
      setWs(socket);
    };

    socket.onmessage = handleMessage;

    socket.onclose = () => {
      console.log('Disconnected from the WebSocket server');
      setWs(null);
    };

    // Închide conexiunea când componenta este demontată
    return () => {
      socket.close();
    };
  }, [url, handleMessage]);

  // Funcție pentru trimiterea de mesaje
  const sendMessage = useCallback(
    (message: string) => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(message);
      } else {
        console.error('WebSocket is not open');
      }
    },
    [ws]
  );

  return { messages, sendMessage };
};
