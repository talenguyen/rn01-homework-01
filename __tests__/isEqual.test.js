const isEqual = require("../isEqual");

describe("isEqual", () => {
  it("compare flat objects", () => {
    const a = { name: "Giang" };
    const b = { name: "Giang" };
    const c = { name: "Đăng" };
    expect(isEqual(a, c)).toBe(false);
    expect(isEqual(a, b)).toBe(true);
  });
});
