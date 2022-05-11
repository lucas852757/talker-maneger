const fs = require('fs').promises;

const setFile = async (fileContent) => {
  await fs.writeFile('./talker.json', JSON.stringify(fileContent));
};

module.exports = {
  setFile,
};