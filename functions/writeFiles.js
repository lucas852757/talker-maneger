const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'talker.json');
const setFile = async (fileContent) => {
  await fs.writeFile(filePath, JSON.stringify(fileContent));
};

module.exports = {
  setFile,
};