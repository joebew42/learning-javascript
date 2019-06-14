var expect = require('chai').expect;
var helloWorld = require('../src/hello_world');

describe("HelloWorld", () => {
  describe("sayHello", () => {
    it("return Hello World", () => {
      expect(helloWorld.sayHello()).to.equal("Hello World");
    });
  });
});