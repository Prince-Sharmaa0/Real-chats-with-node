# Real-time Chat Application

This is a simple real-time chat application built using Node.js, Express, Socket.io, and MySQL. It allows users to send and receive messages in real-time.

## Features

- Real-time messaging using WebSockets
- User-friendly chat interface
- Stores chat messages in a MySQL database

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MySQL installed and running
- A MySQL database named `chat_app_db` (you can change the name in `server.js`)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/real-time-chat-app.git
    cd real-time-chat-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a MySQL database and a `messages` table:
    ```sql
    CREATE DATABASE chat_app_db;
    USE chat_app_db;
    CREATE TABLE messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

4. Update the MySQL connection settings in `server.js`:
    ```javascript
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'your-password',
        database: 'chat_app_db'
    });
    ```

### Running the Application

1. Start the server:
    ```sh
    node server.js
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## File Structure

- `server.js`: The main server file that handles HTTP and WebSocket connections.
- `public/`: Contains the static files for the client-side application.
  - `index.html`: The main HTML file for the chat interface.
  - `styles.css`: The stylesheet for the chat interface.
  - `client.js`: The client-side JavaScript file that handles WebSocket communication.

## Usage

- Open the chat application in your browser.
- Enter a username and message, then click "Send".
- Messages will be displayed in the chat interface and stored in the MySQL database.

## License

This project is licensed under the MIT License.
