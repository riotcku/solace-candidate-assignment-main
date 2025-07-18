import { generateAdvocateData } from "./advocates";
import { jest } from "@jest/globals";

jest.spyOn(global.Math, "floor").mockImplementation(() => 0); // random will always return first item in array

describe("generateAdvocateData", () => {
  it("should generate correct number of advocates given", () => {
    const result = generateAdvocateData(100);
    expect(result).toHaveLength(100);
  });

  it("should properly generate an advocate", () => {
    const advocate = generateAdvocateData(1)[0];

    expect(advocate.firstName).toEqual("John");
    expect(advocate.lastName).toEqual("Smith");
  });
});
