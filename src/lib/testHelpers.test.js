const { initController, setTimeoutAsync } = require("./testHelpers");

describe("testHelpers", () => {
  beforeEach(() => {});

  describe("initController", () => {
    it(`should be a function`, () => {
      expect(typeof initController).toEqual("function");
    });

    it(`should return a BotMock controller`, () => {
      const noop = () => {};
      const controller = initController(noop);

      expect(typeof controller).toEqual("object");
      expect(controller.constructor.name).toEqual("BotMock");
    });
  });

  describe("setTimeoutAsync", () => {
    it(`should be a function`, async () => {
      expect(typeof setTimeoutAsync).toEqual("function");
    });

    it(`should return a Promise that resolves`, async () => {
      const timeout = setTimeoutAsync();

      expect(timeout.constructor.name).toEqual("Promise");
      expect(timeout).resolves.toBeUndefined();
    });
  });
});
