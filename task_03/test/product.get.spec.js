var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var chai = require("chai");
var expect = chai.expect;
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Product", function() {
  describe("Get", function() {
    it("All values", function() {
      chai
        .request("http://localhost:3030")
        .get("/products")
        .end((err, res) => {
          // Check the response code
          expect(res).to.have.status(200);
        });
    });
    it("Set the limit", function() {
      chai
        .request("http://localhost:3030")
        .get("/products")
        .query({ $limit: "1" })
        .end((err, res) => {
          // Check the response code
          expect(res).to.have.status(200);
          // Check if the limit is the same
          expect(res.body.limit).to.be.eql(1);
        });
    });
    it("Invalid limit", function() {
      chai
        .request("http://localhost:3030")
        .get("/products")
        .query({ $limit: "a" })
        .end((err, res) => {
          // Check the response code
          expect(res).to.have.status(500);
        });
    });
    it("Skip values", function() {
      var firstBody = null;
      chai
        .request("http://localhost:3030")
        .get("/products")
        .query({ $limit: "2" })
        .end((err, res) => {
          // check the response code
          expect(res).to.have.status(200);
          // save the first value
          firstBody = res.body;
        });
      chai
        .request("http://localhost:3030")
        .get("/products")
        .query({ $limit: "2", $skip: "2" })
        .end((err, res) => {
          // check the response code
          expect(res).to.have.status(200);
          // check if current response don't have the first value
          expect(res.body).to.not.eql(firstBody);
        });
    });
  });
});
