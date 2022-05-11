// to finish
/* 
 */
const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (typeof talk === 'undefined') {
 return res.status(400).json({
    message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  }); 
}
if ((typeof talk.watchedAt === 'undefined') || (typeof talk.rate === 'undefined')) {
  return res.status(400).json({
    message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  });
}
 return next();
};

module.exports = validateTalk;