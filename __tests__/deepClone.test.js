const deepClone = require("../deepClone");

describe("deepClone", () => {
  it("clone a flat object", () => {
    const a = { name: "Giang" };
    const b = deepClone(a);

    expect(b).toEqual(a);

    // modify b
    b.name = "Jack";

    // expect a is not changed
    expect(a).toEqual({ name: "Giang" });
  });
});
