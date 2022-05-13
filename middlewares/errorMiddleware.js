/* souerce: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/express-middlewares/0ba5165f-5fda-4b6b-8de7-d2ccf5782c18/conteudos/d7afb381-bbae-497d-aea8-d41366f36066/pacote-express-rescue/aad27998-ad66-49f0-83f5-f1e927e5ec20?use_case=side_bar 

Função retirada do course!
O middleware de erro abaixo, verifica se o erro possui um código e um status HTTP. Possuindo, são devolvidos na resposta da requisição. Caso contrário, um erro genérico de servidor é delvolvido.
*/
const errorMiddleware = (err, _req, res, _next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }
  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;