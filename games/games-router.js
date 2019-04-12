const express = require('express');

const router = express.Router()

const db = require('../data/dbConfig');


router.get('/', (req, res) => {
    db('games')
    .then(games => {
        res.status(200).json(games)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;