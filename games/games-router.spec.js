const request = require('supertest');
const server = require('../server');

const db = require('../data/dbConfig')

describe('server', () => {
    describe('GET', () => {
        beforeEach(async () => {
            await db('games').truncate();
          });
        it('should return 200/OK', () => {
            return request(server)
            .get('/api/games')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        it('should return JSON', () => {
            return request(server)
            .get('/api/games')
            .then(response => {
                expect(response.type).toBe('application/json')
            })
        })

        it('should return an array', () => {
            return request(server)
            .get('/api/games')
            .then(response => {
                expect(response.body).toEqual([])
            })
        })

    })


    describe('POST', () => {

        it('should respond 201/Created', async () => {
            const body = { title: 'Pacman', genre: 'Arcade', releaseYear: 1980}
            const response = await request(server).post('/api/games').send(body)
            expect(response.status).toBe(201)
        })

        it('should return 422 if req fields are missing', async () => {
            const body = {}
            const response = await request(server).post('/api/games').send(body)
            expect(response.status).toBe(422)
        })

        it('should return JSON', async () => {
            const body = { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 }
            const response = await request(server).post('/api/games').send(body)
            expect(response.type).toBe('application/json')
        })
    })
})