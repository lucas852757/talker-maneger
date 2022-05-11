//
const validateWatchedAtFormat = (req, res, next) => {
  const { talk } = req.body;
  const regex = /^\d{4}\/\d{2}\/\d{2}$/;
  const [dd, mm, yyyy] = talk.watchedAt.split('/');
  const setDate = `${yyyy}/${mm}/${dd}`;
  const isValidDate = Date.parse(setDate);

  if (setDate.match(regex) === null || !isValidDate) {
 return res.status(400).json({
    message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  });
} 
 next();
};

module.exports = validateWatchedAtFormat;