import { expect } from "chai";

import HelloWorld from "../src/HelloWorld.js";

describe("HelloWorld", () => {
  describe("sayHello", () => {
    it("return Hello World", () => {
      var helloWorld = new HelloWorld();

      expect(helloWorld.sayHello()).to.equal("Hello World");
    });
  });
});
