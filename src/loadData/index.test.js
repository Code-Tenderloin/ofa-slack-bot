const loadData = require('./index');

describe("loadData", () => {
    beforeEach(() => {});
 
    it(`should be a function`, () => {
      expect(typeof loadData).toEqual("function");
    });
      
});
