// build your server here and require it from index.js
const express = require('express');
const resourcesRouter = require('./resource/router');
const projectsRouter = require('./project/router');
const tasksRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.essage,
        stack: err.stack,
    });
});

server.get('/', (req, res) => {
    res.send(`
    <h2>Hello from express 🤖</h2>
    `)
});

module.exports = server;