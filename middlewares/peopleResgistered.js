const { getFile } = require('../functions/readFiles');

const peopleRegistered = async (req, res) => {
  try {
    const people = await getFile();
    return res.status(200).json(people);
  } catch (error) {
    return res.status(200).json([]);
  }
};

module.exports = peopleRegistered;