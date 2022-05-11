const { getFile } = require('../functions/readFiles');
const { setFile } = require('../functions/writeFiles');

const registerPeople = async (req, res) => {
  const people = await getFile();
  const { name, age, talk } = req.body;
  const id = people.length + 1;

  people.push({ name, age, id, talk });
  setFile(people);
  return res.status(201).json({ name, age, id, talk });
};

module.exports = registerPeople;