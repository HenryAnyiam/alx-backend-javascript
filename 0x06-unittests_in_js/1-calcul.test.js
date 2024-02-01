/* eslint-disble */
const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return 4", () => {
      assert.equal(calculateNumber("SUM", 1, 3), 4);
    });
    it("should return 5", () => {
      assert.equal(calculateNumber("SUM", 1, 3.7), 5);
    });
    it("should return 5", () => {
      assert.equal(calculateNumber("SUM", 1.2, 3.7), 5);
    });
    it("should return 6", () => {
      assert.equal(calculateNumber("SUM", 1.5, 3.7), 6);
    });
  });
  describe("SUBTRACT", () => {
    it("should return 2", () => {
      assert.equal(calculateNumber("SUBTRACT", 3, 1), 2);
    });
    it("should return 4", () => {
      assert.equal(calculateNumber("SUBTRACT", 4.5, 1.4), 4);
    });
    it("should return -4", () => {
      assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
    });
  });
  describe("DIVIDE", () => {
    it("should return 0.2", () => {
      assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    });
    it("should return Error", () => {
      assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error");
    });
  });
});
