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

  it("clone an array", () => {
    const a = [
      {
        name: "Giang",
        address: {
          street: "1 Nguyen Thong, Ward 9, District 3",
          city: "Ho Chi Minh",
        },
      },
      {
        name: "Khoa",
        address: {
          street: "12 Nguyen Thong, Ward 9, District 3",
          city: "Ho Chi Minh",
        },
      },
    ];

    const b = deepClone(a);

    expect(b).toEqual(a);

    // modify b
    b[0].address.street = "12 Nguyen Thong, Ward 9, District 3";

    // expect a is not changed
    expect(a).toEqual([
      {
        name: "Giang",
        address: {
          street: "1 Nguyen Thong, Ward 9, District 3",
          city: "Ho Chi Minh",
        },
      },
      {
        name: "Khoa",
        address: {
          street: "12 Nguyen Thong, Ward 9, District 3",
          city: "Ho Chi Minh",
        },
      },
    ]);
  });
  
  it("still work with something else", () => {
    expect(deepClone(null)).toEqual(null);
    expect(deepClone(undefined)).toEqual(undefined);
    expect(deepClone("string")).toEqual("string");
    expect(deepClone(10)).toEqual(10);
    expect(deepClone(true)).toEqual(true);
    expect(deepClone(false)).toEqual(false);
  });
});
