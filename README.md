# Learning JavaScript

This repository contains a set of Code Kata I've used to practice and learn JavaScript.

## How to run the examples

1. Fetch all dependencies

```
npm install
```

2. Run all the tests

```
npm test
```

## What's going on?

I am practicing the [Salary Slip Kata](https://github.com/sandromancuso/salaryslipkata).

A Salary Slip Generator should receive an employee with its Employee Id, Employee Name and Annual Gross Salary

Salary slip should contain the Employee ID, Employee Name, Gross Salary, National Insurance contributions, Tax-free allowance, Taxable income and Tax payable for the month

- SalarySlipGenerator
- Employee (Id, Name, Gross Salary)
- SalarySlip (EmployeeId, EmployeeName, GrossSalary, NationalInsurance contributions, Tax-free allowance, Taxable income and Tax payable for the month)

The entry point should be the following interface, which you can not change:

```
public class SalarySlipGenerator {
  public SalarySlip generateFor(Employee employee);
}
```

Iteration 1: for an annual salary of £5,000.00
This is the most basic case.

*Given* I have an employee John J Doe with an annual gross salary of £5,000.00

*When* I generate a monthly salary slip for the employee

*Then* the monthly salary slip should contain the below:

       Employee ID: 12345
       Employee Name: John J Doe
       Gross Salary: £416.67

Calculation rules:

Monthly Gross Salary: The monthly gross salary is the employee's annual gross salary divided by 12


## Nice to explore later ...

- Bank Kata https://github.com/sandromancuso/Bank-kata
- Explore code coverage tools for JavaScript
- How to test the front-end code (interaction with the DOM, etc ...)?
- Setup Vim for JavaScript
- Setup Emacs for JavaScript

## Resources I found about JavaScript

In JavaScript there is [NO concept of **Class**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

Everything is an [**Object**](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md).

Inheritance between objects is achieved with a mechanism known as [**Prototypal Inheritance**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

We can create Objects and then link them together **OLOO** (Objects-Linked-to-Other-Objects).

- [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Allonge](https://github.com/raganwald/javascript-allonge)
- [Professor Frisby's Mostly Adeguate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide)
  - [Functional Programming with JavaScript Object Arrays](https://www.telerik.com/blogs/functional-programming-with-javascript-object-arrays)
- [JavaScript For Beginners: the ‘new’ operator](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)
- [Export and Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  - [Export Multiple Classes in ES6](https://stackoverflow.com/questions/38340500/export-multiple-classes-in-es6-modules)
- [JavaScript Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [Compatibility Matrix Node/ES6](https://node.green/)
- [Compare the differences between ES6 and ES5](http://es6-features.org)
  - ES6 stands for ECMAScript 6 (a.k.a. [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) 2015)

### Testing and JavaScript

- [JavaScript Unit Testing for Beginners](https://designmodo.com/test-javascript-unit/)
- Video about [Setting up Unit Testing with Mocha and Chai](https://egghead.io/lessons/javascript-setting-up-unit-testing-with-mocha-and-chai)
- Video about [Unit Testing With Mocha and Chai](https://egghead.io/lessons/javascript-unit-testing-with-mocha-and-chai)
- Ended up with [Chai](https://www.chaijs.com/) as assertions library, and [Mocha](https://mochajs.org/) as test runner
  - Discovered that Chai allows three different assertion styles (Should, Expect and Assert). It's just a matter of style.
  - But there is also another Testing Framework to experiment with, [Jest](https://jestjs.io/).
- [An Overview of JavaScript Testing in 2019](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a)
- [End to End test with Cypress](https://www.cypress.io/)

### Extensions or Resources about VisualStudioCode

- [Chai Snippets](https://marketplace.visualstudio.com/items?itemName=nwhatt.chai-snippets)
- [Recommended Extensions](https://code.visualstudio.com/docs/nodejs/extensions#_recommended-extensions)
- [Refactoring JavaScript](https://code.visualstudio.com/docs/editor/refactoring)
- [JS Refactor](https://marketplace.visualstudio.com/items?itemName=cmstead.jsrefactor)
