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


router.post('/', (req, res) => {
    const { title, genre, releaseYear } = req.body;
    if(!title || !genre || !releaseYear) {
        return res.status(422).json({ message: 'Please provide Title, Genre, & Release Year' })
    } else {
        return db('games').insert(req.body)
        .then(ids => {
            const id = ids[0]
            db('games')
            .where({id})
            .then(games => {
                res.status(201).json(games)
            })
        })
        .catch(error => {
            res.status(500).json({ message: `There was an error adding to the DB ${error}`})
        })
    }
})

module.exports = router;