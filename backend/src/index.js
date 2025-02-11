const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to my Node.js project!");
});

// Create an HTTP server
const server = http.createServer(app);

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// WebSocket connection handling
wss.on("connection", (ws) => {
  console.log("A new client connected!");

  // Send a welcome message to the clien
  ws.send("Welcome to the WebSocket server!");

  // Handle messages from the client
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Echo the message back to the client
    ws.send(`You sent: ${message}`);
  });

  // Handle client disconnection
  ws.on("close", () => {
    console.log("A client disconnected");
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
