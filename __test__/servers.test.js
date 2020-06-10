const { getServers } = require('../controllers/servers');
const supertest = require('supertest');
const app = require('../app');
/*
test('should output url with priority', async() => {
    const url = await getServers(app).get('/');

    expect(res.status).toBe(200);
    expect(res.status(200).json(result)).toBe([
        {
            "url": "http://instagram.com",
            "priority": 3
        }
    ])
})*/


describe("Testing servers api", () => {
    it("test base route", async () =>{
        const response = await supertest(getServers).get('/api/v1/servers');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty([{"url": "http://instagram.com", "priority": 3}]);

    })
})