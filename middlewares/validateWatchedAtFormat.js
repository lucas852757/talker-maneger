/* source:https://www.delftstack.com/pt/howto/javascript/javascript-validate-date/
source: https://bobbyhadz.com/blog/javascript-date-validation-dd-mm-yyyy 
Este código valida uma data no formato dd/mm/mm utilizando um regex e o Date.parse(), que calcula o número de anos entre 1 de janeiro de 1970 até a data atual.
*/ 
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