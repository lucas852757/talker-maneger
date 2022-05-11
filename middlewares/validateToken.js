/* O link abaixo foi usado como fonte de pesquisa para 
a construçao da função validatoken.
source: https://appdividend.com/2022/03/08/how-to-add-property-to-object-in-javascript/ */
const validateToken = (req, res, next) => {
  /* req.headers.authorization = generateToken(); */
  const { authorization } = req.headers;
  if ((authorization === undefined)) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }
  if (authorization.length !== 16) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }
  return next();
};

module.exports = validateToken;