var mocha = require("mocha");
var describe = mocha.describe;
var before = mocha.before;
var it = mocha.it;
var chai = require("chai");
var expect = chai.expect;
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Product", function() {
  describe("Delete", function() {
    var productId = '';
    before(function() {
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
          productId = res.body.id;
        });
    });
    it("Remove a product", function() {
      chai
        .request("http://localhost:3030")
        .delete(`/products/${productId}`)
        .set("Accept", "application/json")
        .end((err, res) => {
          // Check the response code
          expect(res.status).to.be.eql(200);
        });
    });
    it("Without product id", function() {
      productId = '';
      chai
        .request("http://localhost:3030")
        .delete(`/products/${productId}`)
        .set("Accept", "application/json")
        .end((err, res) => {
          // Check the response code
          expect(res.status).to.be.eql(200);
        });
    });
  });
});
