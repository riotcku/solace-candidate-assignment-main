import { generateAdvocateData } from "./advocates";

describe("generateAdvocateData", () => {
  it("should generate correct number of advocates given", () => {
    const result = generateAdvocateData(100);
    expect(result).toHaveLength(100);
  });
});
