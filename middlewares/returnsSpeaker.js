const { getFile } = require('../functions/readFiles');

const returnsSpeaker = async (req, res) => {
    const people = await getFile();
    const { id } = req.params;
    const found = people.find((r) => r.id === parseInt(id, 10));
    if (found) return res.status(200).json(found);
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
};

module.exports = returnsSpeaker;