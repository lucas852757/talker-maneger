const { getFile } = require('../functions/readFiles');

const searchTerm = async (req, res) => {
  const { q } = req.query;
  const file = await getFile();
  if (q === undefined) return res.status(200).json(file);
  const found = file.filter((p) => p.name.includes(q));
  return res.status(200).json(found);
};

module.exports = searchTerm;