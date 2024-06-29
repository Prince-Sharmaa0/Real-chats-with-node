// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'prince2004',
  database: 'chat_app_db' // Change this to your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Serve static files (if any)
app.use(express.static(__dirname + '/public'));

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages from clients
  socket.on('chatMessage', (data) => {
    const { username, message } = data;
    const insertMessage = { username, message };
    db.query('INSERT INTO messages SET ?', insertMessage, (err, result) => {
      if (err) {
        throw err;
      }
      // Broadcast the message to all clients
      io.emit('message', { id: result.insertId, username, message });
    });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
