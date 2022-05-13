/* source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/express-middlewares/0ba5165f-5fda-4b6b-8de7-d2ccf5782c18/conteudos/d7afb381-bbae-497d-aea8-d41366f36066/pacote-express-rescue/aad27998-ad66-49f0-83f5-f1e927e5ec20?use_case=side_bar

Esta função foi retirada do course!
 Este meddlewarede erro trabalha em conjunto com o errorMiddleware, mudando as mensagens de erro de leitura de arquivo, para que, dados importantes não sejam vistos pelo usuário. */

const changeErrorMiddleware = (err, _req, _res, next) => {
  if (err.code === 'ENOENT') {
    const newError = new Error(err.message);
    newError.message = 'ENOENT: no such file or directory';
    newError.code = 'file_not_found';
    newError.status = 404;
    return next(newError);
  }

  return next(err);
};

module.exports = changeErrorMiddleware;