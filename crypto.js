/* Esta função foi retirada do course.
source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/express-middlewares-gabarito/solutions/95b7c14d-06b4-4c29-8f0d-825cd974806c/gabarito-dos-exercicios-de-fixacao/264f5249-ed48-4237-9f74-5cd179c88d7a?use_case=calendar
 */
const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  generateToken,
};