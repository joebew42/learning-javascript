var expect = require('chai').expect;

var HelloWorld = require('../src/hello_world');

describe("HelloWorld", () => {
  describe("sayHello", () => {
    it("return Hello World", () => {
      helloWorld = new HelloWorld();

      expect(helloWorld.sayHello()).to.equal("Hello World");
    });
  });
});