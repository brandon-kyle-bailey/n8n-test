const { helloHandler } = require("./app");

describe("helloHandler", () => {
  it("should respond with JSON containing Hello, world!", () => {
    const req = {};
    const res = { json: jest.fn() };

    helloHandler(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: "Hello, world!" });
  });
});
