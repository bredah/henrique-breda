# Monefy

This document contains a test plan for the application Monefy.

> The tests plan is based on the application for the iOS platform.

## Scenarios

* [ ] [Add an income](#add-an-income)
* [ ] [Add an expense](#add-an-expense)
* [ ] [Show the current balance](#show-the-current-balance)
* [ ] [Remove an income](#remove-an-income)
* [ ] [Remove an expense](#remove-an-expense)
* [ ] [Show balance - Filter by date](#show-balance---filter-by-date)

### Add an income

Allow to add a new income value.

**Precondition(s)**:

n/a

**Step(s)**:

1. Touch in the "+" icon
2. Enter the value "5.00"
3. Choose the category

**Expected result**:

* The application shows the main screen with the value entered added to the income value.

### Add an expense

Allow to add a new expense value.

**Precondition(s)**:

n/a

**Step(s)**:

1. Touch in the "-" icon
2. Enter the value "5.00"
3. Choose the category

**Expected result**:

* The application shows the main screen with the value entered added to the expense value.

### Show the current balance

Display the balance (incomes and expenses )from the current month.

**Precondition(s)**:

* [Add an income](#add-an-income)
* [Add an expense](#add-an-expense)
  
**Step(s)**:

1. Touch in the balance area

**Expected result**:

* The application shows the balance from the current month.

### Remove an income

Allow to remove an income.

**Precondition(s)**:

* [Add an income](#add-an-income)
* [Show the current balance](#show-the-current-balance)

**Step(s)**:

1. Touch in the balance area
2. Touch in a category to show all incomes
3. Touch in an income
4. Touch in the delete (garbage icon)

**Expected result**:

* The application shows the current balance without the deleted income.

### Remove an expense

Allow to remove an expense.

**Precondition(s)**:

* [Add an expense](#add-an-expense)
* [Show the current balance](#show-the-current-balance)

**Step(s)**:

1. Touch in the balance area
2. Touch in a category to show all expenses
3. Touch in an expense
4. Touch in the delete (garbage icon)

**Expected result**:

* The application shows the current balance without the deleted expense.

### Show balance - Filter by date

Display the balance (incomes and expenses) in the specific date.

**Precondition(s)**:

* [Add an income](#add-an-income)
  
**Step(s)**:

1. Touch in the filter icon
2. Touch in the option "Choose date"
3. Select a date with income and/or expense registered.

**Expected result**:

* The application shows the balance in the specific date.