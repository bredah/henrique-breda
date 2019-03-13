var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var chai = require("chai");
var expect = chai.expect;
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Product", function() {
  describe("Post", function() {
    it("Add a product", function() {
      chai
        .request("http://localhost:3030")
        .post("/products")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send({
          name: "string",
          type: "string",
          price: 0,
          shipping: 0,
          upc: "string",
          description: "string",
          manufacturer: "string",
          model: "string",
          url: "string",
          image: "string"
        })
        .end((err, res) => {
          // Check the response code
          expect(res.status).to.be.eql(201);
        });
    });
    it("Without name", function() {
      chai
        .request("http://localhost:3030")
        .post("/products")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send({
          type: "string",
          price: 0,
          shipping: 0,
          upc: "string",
          description: "string",
          manufacturer: "string",
          model: "string",
          url: "string",
          image: "string"
        })
        .end((err, res) => {
          // Check the response code
          expect(res.status).to.be.eql(400);
        });
    });
    it("Without price", function() {
      chai
        .request("http://localhost:3030")
        .post("/products")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send({
          name: "string",
          type: "string",
          shipping: 0,
          upc: "string",
          description: "string",
          manufacturer: "string",
          model: "string",
          url: "string",
          image: "string"
        })
        .end((err, res) => {
          // Check the response code
          expect(res.status).to.be.eql(400);
        });
    });
  });
});
