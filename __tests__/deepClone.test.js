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

  it("clone a nested object", () => {
    const a = {
      name: "Giang",
      address: {
        street: "1 Nguyen Thong, Ward 9, District 3",
        city: "Ho Chi Minh",
      },
    };

    const b = deepClone(a);

    expect(b).toEqual(a);

    // modify b
    b.address.street = "12 Nguyen Thong, Ward 9, District 3";

    // expect a is not changed
    expect(a).toEqual({
      name: "Giang",
      address: {
        street: "1 Nguyen Thong, Ward 9, District 3",
        city: "Ho Chi Minh",
      },
    });
  });
});
