var expect = require('chai').expect;

import HelloWorld from '../src/HelloWorld'

describe("HelloWorld", () => {
  describe("sayHello", () => {
    it("return Hello World", () => {
      var helloWorld = new HelloWorld();

      expect(helloWorld.sayHello()).to.equal("Hello World");
    });
  });
});