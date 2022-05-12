const { getFile } = require('../functions/readFiles');
const { setFile } = require('../functions/writeFiles');

const editSpeaker = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id, 10);
  const { name, age, talk } = req.body;
  const file = await getFile();

  const foundIndex = file.findIndex((r) => r.id === id);
  if (foundIndex === -1) return res.status(404).json({ message: 'id not found' });

  file[foundIndex] = { ...file[foundIndex], name, age, id, talk };
  setFile(file);
  return res.status(200).json({ name, age, id, talk });
};

module.exports = editSpeaker;