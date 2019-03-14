import CalculatorPage from "../pages/calculator.page";

describe("Calculator", function() {
  // runs before all tests in this block
  // before(function() {
  // });

  // runs after all tests in this block
  // after(function() {
  // });

  // runs before each test in this block
  // beforeEach(function() {
  // });

  // runs after each test in this block
  afterEach(function() {
    CalculatorPage.clear();
  });

  it("Add", function() {
    inputValues(35, 24, "+");
    var result = CalculatorPage.result();
    assert.equal(result, 59);
  });

  it("Sub", function() {
    inputValues(55, 44, "sub");
    var result = CalculatorPage.result();
    assert.equal(result, 11);
  });

  it("Mul", function() {
    inputValues(241, 55, "multiply");
    var result = CalculatorPage.result();
    assert.equal(result, 13255);
  });

  it("Div", function() {
    inputValues(143920, 2, "div");
    var result = CalculatorPage.result();
    assert.equal(result, 71960);
  });
});

function inputValues(firstValue, secondValue, equation) {
  CalculatorPage.enterValue(firstValue);
  CalculatorPage.enterValue(equation);
  CalculatorPage.enterValue(secondValue);
}
