const SELECTORS = {
  BUTTON_0: 'new UiSelector().resourceId("com.android.calculator2:id/digit_0")',
  BUTTON_1: 'new UiSelector().resourceId("com.android.calculator2:id/digit_1")',
  BUTTON_2: 'new UiSelector().resourceId("com.android.calculator2:id/digit_2")',
  BUTTON_3: 'new UiSelector().resourceId("com.android.calculator2:id/digit_3")',
  BUTTON_4: 'new UiSelector().resourceId("com.android.calculator2:id/digit_4")',
  BUTTON_5: 'new UiSelector().resourceId("com.android.calculator2:id/digit_5")',
  BUTTON_6: 'new UiSelector().resourceId("com.android.calculator2:id/digit_6")',
  BUTTON_7: 'new UiSelector().resourceId("com.android.calculator2:id/digit_7")',
  BUTTON_8: 'new UiSelector().resourceId("com.android.calculator2:id/digit_8")',
  BUTTON_9: 'new UiSelector().resourceId("com.android.calculator2:id/digit_9")',
  BUTTON_ADD:
    'new UiSelector().resourceId("com.android.calculator2:id/op_add")',
  BUTTON_SUB:
    'new UiSelector().resourceId("com.android.calculator2:id/op_sub")',
  BUTTON_MUL:
    'new UiSelector().resourceId("com.android.calculator2:id/op_mul")',
  BUTTON_DIV:
    'new UiSelector().resourceId("com.android.calculator2:id/op_div")',
  BUTTON_EQL: 'new UiSelector().resourceId("com.android.calculator2:id/eq")',
  BUTTON_DEL: 'new UiSelector().resourceId("com.android.calculator2:id/del")',
  BUTTON_CLR: 'new UiSelector().resourceId("com.android.calculator2:id/clr")',
  TEXT_RESULT:
    'new UiSelector().resourceId("com.android.calculator2:id/result")'
};

class CalculatorPage {
  get button0() {
    return $(`android=${SELECTORS.BUTTON_0}`);
  }
  get button1() {
    return $(`android=${SELECTORS.BUTTON_1}`);
  }
  get button2() {
    return $(`android=${SELECTORS.BUTTON_2}`);
  }
  get button3() {
    return $(`android=${SELECTORS.BUTTON_3}`);
  }
  get button4() {
    return $(`android=${SELECTORS.BUTTON_4}`);
  }
  get button5() {
    return $(`android=${SELECTORS.BUTTON_5}`);
  }
  get button6() {
    return $(`android=${SELECTORS.BUTTON_6}`);
  }
  get button7() {
    return $(`android=${SELECTORS.BUTTON_7}`);
  }
  get button8() {
    return $(`android=${SELECTORS.BUTTON_8}`);
  }
  get button9() {
    return $(`android=${SELECTORS.BUTTON_9}`);
  }
  get buttonPlus() {
    return $(`android=${SELECTORS.BUTTON_ADD}`);
  }
  get buttonMinus() {
    return $(`android=${SELECTORS.BUTTON_SUB}`);
  }
  get buttonMultiply() {
    return $(`android=${SELECTORS.BUTTON_MUL}`);
  }
  get buttonDivide() {
    return $(`android=${SELECTORS.BUTTON_DIV}`);
  }
  get buttonEqual() {
    return $(`android=${SELECTORS.BUTTON_EQL}`);
  }
  get buttonClear() {
    return $(`android=${SELECTORS.BUTTON_CLR}`);
  }
  get buttonDelete() {
    return $(`android=${SELECTORS.BUTTON_DEL}`);
  }
  get textResult() {
    return $(`android=${SELECTORS.TEXT_RESULT}`);
  }

  
  /**
   * Enter the value in the calculator
   * @param  {string|number} value Value to be enter
   */
  enterValue(value) {
    if (isInt(value)) {
      var strValue = value.toString();
      for (var i = 0; i < strValue.length; i++) {
        switch (parseInt(strValue.charAt(i))) {
          case 0:
            this.button0.click();
            break;
          case 1:
            this.button1.click();
            break;
          case 2:
            this.button2.click();
            break;
          case 3:
            this.button3.click();
            break;
          case 4:
            this.button4.click();
            break;
          case 5:
            this.button5.click();
            break;
          case 6:
            this.button6.click();
            break;
          case 7:
            this.button7.click();
            break;
          case 8:
            this.button8.click();
            break;
          case 9:
            this.button9.click();
            break;
        }
      }
    } else {
      switch (value) {
        case "add":
        case "plus":
        case "+":
          this.buttonPlus.click();
          break;
        case "minus":
        case "sub":
        case "-":
          this.buttonMinus.click();
          break;
        case "divide":
        case "div":
        case "/":
          this.buttonDivide.click();
          break;
        case "multiply":
        case "multi":
        case "*":
          this.buttonMultiply.click();
          break;
      }
    }
  }

  /**
   * Retrive the result value
   * @return {number} result obtained
   */
  result() {
    this.buttonEqual.click();
    return parseInt(this.textResult.getText().replace(",", ""));
  }

  /**
   * Clear the calculator
   */
  clear() {
    this.buttonClear.click();
  }
}

/**
 * Check if the value is a string
 * @param  {string|number} value Variable to check the content
 * @returns {boolean} Is a number
 */
function isInt(value) {
  return (
    !isNaN(value) &&
    (function(x) {
      return (x | 0) === x;
    })(parseFloat(value))
  );
}

export default new CalculatorPage();
