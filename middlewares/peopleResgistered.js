const { getFile } = require('../functions/readFiles');

const peopleRegistered = async (req, res) => {
    const people = await getFile();
    return res.status(200).json(people);
};

module.exports = peopleRegistered;