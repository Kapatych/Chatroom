const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;
const router = require('./router');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

io.on('connection', (socket) => {

    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room});

        if (error){
            return callback(error);
        }  else {
            callback('')
        }

        // Join to room
        socket.join(user.room);

        // Greeting message
        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}!`});

        // Notify the room about a new user
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined!`});

        // Change room users list
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        // Notify the room about a new message
        io.to(user.room).emit('message', {user: user.name, text: message, time});

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            // Notify the room the user has left
            socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`});

            // Change room users list
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});
        }
    })
});

app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

