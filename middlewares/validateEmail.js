const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)?$/i;
  const userBoolean = regex.test(email);
  if (typeof email === 'undefined' || email.length === 0) {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
  });
}
  if (!userBoolean) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
  });
}
return next();
};

module.exports = validateEmail;