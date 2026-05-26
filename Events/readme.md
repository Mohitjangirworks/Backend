# Node.js Quick Notes 🚀

This repository contains quick notes and examples for:

- Event-Driven Architecture
- Events Module
- `once()` Method
- Socket.IO Basics

---

# 1. Event-Driven Architecture

Node.js is called **event-driven** because it reacts to events instead of waiting for tasks to finish.

---

## Flow

```text
Event Happens
      ↓
Event Loop Detects
      ↓
Callback Function Runs
```

---

## Examples of Events

- File read complete
- User request
- Timer finished
- Database response

---

## Key Terms

| Term | Meaning |
|------|---------|
| Event | Action that happens |
| Callback | Function executed after event |
| Non-blocking | Doesn't stop other work |
| Asynchronous | Works in background |
| Event Loop | Handles events |

---

## Example

```js
const fs = require('fs');

console.log("Start");

fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log("End");
```

### Output

```text
Start
End
file content later
```

---

# 2. Events Module

The Events module is used to create and handle custom events.

---

## Import Events Module

```js
const EventEmitter = require('events');
```

---

## Create EventEmitter Object

```js
const emitter = new EventEmitter();
```

---

## Important Methods

| Method | Work |
|--------|------|
| `on()` | Listen to event |
| `emit()` | Trigger event |
| `once()` | Run only one time |
| `off()` | Remove listener |

---

## Example

```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log("Hello");
});

emitter.emit('greet');
```

### Output

```text
Hello
```

---

# 3. once() Method

`once()` runs the listener only one time.

After execution, the listener is automatically removed.

---

## Example

```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.once('login', () => {
    console.log("Logged In");
});

emitter.emit('login');
emitter.emit('login');
```

### Output

```text
Logged In
```

---

## Difference Between on() and once()

| on() | once() |
|------|---------|
| Runs every time | Runs only once |
| Listener stays active | Listener auto removed |

---

# 4. Socket.IO

Socket.IO enables **real-time communication** between client and server.

---

## Used In

- Chat applications
- Live notifications
- Multiplayer games
- Live updates

---

# Socket.IO Uses Events

Socket.IO communication is completely event-based.

---

## Main Functions

| Function | Work |
|----------|------|
| `emit()` | Send event |
| `on()` | Listen event |

---

## Client Sends Message

```js
socket.emit('chat', 'Hello');
```

---

## Server Receives Message

```js
socket.on('chat', (msg) => {
    console.log(msg);
});
```

---

# Chat App Flow

```text
Client emit()
      ↓
Server receives
      ↓
Server broadcasts
      ↓
All users receive
```

---

## Important Difference

| Method | Meaning |
|--------|---------|
| `socket.emit()` | Send to one socket |
| `io.emit()` | Send to all connected clients |

---

# Basic Chat Server Example

```js
io.on('connection', (socket) => {

    console.log('User connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});
```

---

# Interview Definitions

## Event-Driven

> Node.js reacts to events using callbacks and the event loop.

---

## Events Module

> Used to create and handle custom events using EventEmitter.

---

## Socket.IO

> Socket.IO enables real-time bidirectional event-based communication.

---

# Author

Made by Mohit ❤️