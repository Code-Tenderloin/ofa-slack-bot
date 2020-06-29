const { readdir } = require("fs");
const { promisify} = require("util");

const readdirAsync = promisify(readdir);

const loadFilesFromDirectory = async (directory, excludeRegex = /$^/) => { // a regex that matches nothing by default
  const doesNotMatchExcludeRegex = (file) => !excludeRegex.test(file);

  // get all files in directory
  const files = await readdirAsync(directory);
  return files.filter(doesNotMatchExcludeRegex);
};

module.exports = loadFilesFromDirectory