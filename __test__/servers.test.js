// const { getServers } = require('../controllers/servers');
// const supertest = require('supertest');
//const app = require('../app');
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


// describe("Testing servers api", () => {
//     it("test base route", async () =>{
//         const response = await supertest(getServers).get('/api/v1/servers');
//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty([{"url": "http://instagram.com", "priority": 3}]);

//     })
// })

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const base_url = "http://localhost:5000";
chai.use(chaiHttp);
describe("First Test", function(){
    it('get all servers', function(done){
        chai.request(base_url)
            .get('/api/v1/servers')
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                expect(res.body.url).to.equal(result.url);
                expect(res.body.priority).to.equal(result.priority);
            })
    })
})
