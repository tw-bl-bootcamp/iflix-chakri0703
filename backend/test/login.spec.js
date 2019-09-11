const chai = require('chai');
const assert = require('assert');
const chaiHttp = require('chai-http');
const server = require('../server');
chai.use(chaiHttp);
var should = chai.should();
describe("login", () => {
  it("given no username and password when login response status should have 500", (done) => {
    chai.request(server)
      .post('/login')
      .send({
        'email': '',
        'password': ''
      })
      .end((err, res) => {
        res.should.have.status(500)
        return done();
      })
  })

  it("given invalid email and valid password when login  response status should have 500", (done) => {
    chai.request(server)
      .post('/login')
      .send({
        'email': '',
        'password': '1234'
      })
      .end((err, res) => {
        res.should.have.status(500)
        return done();
      })
  })
  it("given valid email and invalid password when login response status should have 500", (done) => {
    chai.request(server)
      .post('/login')
      .send({
        'email': 'chakri',
        'password': ''
      })
      .end((err, res) => {
        res.should.have.status(500)
        return done();
      })
  })
  it("given valid email and password when login response status should have 200", (done) => {
    chai.request(server)
      .post('/login')
      .send({
        'email': 'chakri@gmail.com',
        'password': '1234'
      })
      .end((err, res) => {
        res.should.have.status(200)
        return done();
      })
  })
})