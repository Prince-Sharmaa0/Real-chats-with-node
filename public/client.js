// public/client.js
const socket = io();

// DOM elements
const messageForm = document.getElementById('message-form');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');

// Submit message form
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();
  
  if (username === '' || message === '') {
    return;
  }

  // Send message to server
  socket.emit('chatMessage', { username, message });

  // Clear message input
  messageInput.value = '';
  messageInput.focus();
});

// Handle incoming messages from server
socket.on('message', (data) => {
  displayMessage(data);
});

// Display message in the chat interface
function displayMessage(data) {
  const { id, username, message } = data;
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<span class="username">${username}:</span> ${message}`;
  chatMessages.appendChild(messageElement);
  // Automatically scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


// comment added for testing purpose..
