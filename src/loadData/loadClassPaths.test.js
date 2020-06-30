const loadClassPaths = require('./loadClassPaths');

describe("loadClassPaths", () => {
    beforeEach(() => {});
 
    it(`should be a function`, () => {
      expect(typeof loadClassPaths).toEqual("function");
    });

    it('should return a list of directories', () => {
      const classPaths = loadClassPaths()
    })
      
});
