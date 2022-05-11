const express = require('express');
const { getFile } = require('./functions/readFiles');
const { generateToken } = require('./crypto');
const { setFile } = require('./functions/writeFiles');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateTalk = require('./middlewares/validateTalk');
const validateWatchedAtFormat = require('./middlewares/validateWatchedAtFormat');
const validateRate = require('./middlewares/validateRate');

const router = express.Router();

router.get('/talker/:id', async (req, res) => {
  try {
    const people = await getFile();
    const { id } = req.params;
    const found = people.find((r) => r.id === parseInt(id, 10));
    if (found) return res.status(200).json(found);
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  } catch (error) {
    return res.status(500).end();
  }
});

router.get('/talker', async (req, res) => {
  try {
    const people = await getFile();
    return res.status(200).json(people);
  } catch (error) {
    return res.status(200).json([]);
  }
});

router.post('/login', validateEmail, validatePassword, (req, res) => {
  try {
    const { email, password } = req.body;
    const newToken = generateToken();
    
    if (!email || !password) {
      return res.status(400).end();
    }
    return res.status(200).json({ token: newToken });
  } catch (error) {
    return res.status(500).end();
  }
});

router.post('/talker', validateToken,
validateName, validateAge, 
validateTalk, validateWatchedAtFormat, validateRate, async (req, res) => {
  const people = await getFile();
  const { name, age, talk } = req.body;
  const { authorization } = req.headers;
  const id = people.length + 1;

 if (!authorization) {
 return res.status(401).json({
  message: 'Token não encontrado',
}); 
}
if (authorization.length !== 16) {
 return res.status(401).json({
  message: 'Token inválido',
}); 
}
  people.push({ name, age, id, talk });
  setFile(people);
  return res.status(201).json({ name, age, id, talk });
});

module.exports = router;