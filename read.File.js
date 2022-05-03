const fs = require('fs').promises;

const getFile = async () => {
 const content = await fs.readFile('./talker.json', 'utf8');
 return JSON.parse(content);
};

module.exports = {
  getFile,
};