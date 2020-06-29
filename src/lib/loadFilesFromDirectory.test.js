const loadFilesFromDirectory = require('./loadFilesFromDirectory');

describe("loadFilesFromDirectory", () => {
    beforeEach(() => {});
 
    it(`should be a function`, () => {
      expect(typeof loadFilesFromDirectory).toEqual("function");
    });

    it ('should accept a directory path and no regex', async () => {
      const files = await loadFilesFromDirectory(__dirname)
      expect(files.length).toEqual(4)
    })

    it ('should accept a directory path and a regex that excludes files that match the regex', async () => {
      const files = await loadFilesFromDirectory(__dirname, /test.js$/)
      expect(files.length).toEqual(2)
      expect(files).toEqual([ 'loadFilesFromDirectory.js', 'testHelpers.js' ])
    })
      
});
