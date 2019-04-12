const express = require('express');
const helmet = require('helmet');

const gamesRouter = require('./games/games-router')

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/games', gamesRouter)

module.exports = server;