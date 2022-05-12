const { getFile } = require('../functions/readFiles');
const { setFile } = require('../functions/writeFiles');
 
const removeSpeaker = async (req, res) => {
  const { id } = req.params;
  const file = await getFile();
  const foundIndex = file.findIndex((p) => p.id === parseInt(id, 10));

  if (foundIndex === -1) {
     return res.status(401).json({ message: 'Pessoa palestrante não encontrada' }); 
    }

  file.splice(foundIndex, 1);
  setFile(file);
  return res.status(204).end();
};

module.exports = removeSpeaker;