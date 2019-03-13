var chai = require("chai");
var expect = chai.expect;
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Health Check", function() {
  it("Ping", function() {
    chai
      .request("http://localhost:3030")
      .get("/healthcheck")
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });
});
