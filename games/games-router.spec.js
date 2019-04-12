const request = require('supertest');
const server = require('../server');

describe('server', () => {
    describe('GET', () => {

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
})