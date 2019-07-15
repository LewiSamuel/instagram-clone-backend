// Initial Imports
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://semana:semana@instarocket-gij1j.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req,res, next) => {
    req.io = io;
    next();
});
app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// routes
app.use(require('./routes'));

// start server
server.listen(80);