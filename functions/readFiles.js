const fs = require('fs').promises;
const path = require('path');

const pathFile = path.join(__dirname, '..', 'talker.json');
const getFile = async () => {
  const content = await fs.readFile(pathFile, 'utf8');
  return JSON.parse(content);
};

module.exports = {
  getFile,
};
