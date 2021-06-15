const isEqual = require("../isEqual");

describe("isEqual", () => {
  it("compare flat objects", () => {
    const a = { name: "Giang" };
    const b = { name: "Giang" };
    expect(isEqual(a, b)).toBe(true);

    const c = { name: "Giang", age: 33 };
    expect(isEqual(a, c)).toBe(false);
  });

  it("compare nested objects", () => {
    const a = {
      name: "Giang",
      address: {
        street: "1 Nguyen Thong, Ward 9, District 3",
        city: "Ho Chi Minh",
      },
    };
    const b = {
      name: "Giang",
      address: {
        street: "1 Nguyen Thong, Ward 9, District 3",
        city: "Ho Chi Minh",
      },
    };
    expect(isEqual(a, b)).toBe(true);

    const c = {
      name: "Giang",
      address: {
        street: "5 Nguyen Hau, Tan Thanh Ward, Tan Phu District",
        city: "Ho Chi Minh",
      },
    };
    expect(isEqual(a, c)).toBe(false);

    const d = {
      name: "Giang",
    };

    expect(isEqual(a, d)).toBe(false);
  });

  it("compare same length arrays", () => {
    const a = [
      {
        name: "Giang",
        address: {
          street: "1 Nguyen Thong, Ward 9, District 3",
          city: "Ho Chi Minh",
        },
      },
    ];

    const b = [
      {
        name: "Giang",
        address: {
          street: "1 Nguyen Thong, Ward 9, District 3",
          city: "Ho Chi Minh",
        },
      },
    ];
    expect(isEqual(a, b)).toBe(true);

    const c = [
      {
        name: "Giang",
        address: {
          street: "5 Nguyen Hau, Tan Thanh Ward, Tan Phu District",
          city: "Ho Chi Minh",
        },
      },
    ];
    expect(isEqual(a, c)).toBe(false);
  });


  it("compare diff length arrays", () => {
    const a = [
      {
        name: "Giang",
        address: {
          street: "1 Nguyen Thong, Ward 9, District 3",
          city: "Ho Chi Minh",
        },
      },
    ];
    const b = [
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
      }
    ];
    expect(isEqual(a, b)).toBe(false);
  });
});
