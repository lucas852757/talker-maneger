const express = require('express');
const bodyParser = require('body-parser');
const { getFile } = require('./read.File');
const { generateToken } = require('./crypto');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (typeof password === 'undefined') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password === '' || password.length === 0) {
    return res.status(400).json({
      message: 'O campo "password" é obrigatório',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
  next();
};
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
next();
};

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/:id', async (req, res) => {
  try {
    const people = await getFile();
    const { id } = req.params;
    const found = people.find((r) => r.id === parseInt(id, 10));
    if (found) return res.status(200).json(found);
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  } catch (error) {
    res.status(500).end();
  }
});

app.get('/talker', async (req, res) => {
  try {
    const people = await getFile();
    return res.status(200).json(people);
  } catch (error) {
    return res.status(200).json([]);
  }
});

app.post('/login', validateEmail, validatePassword, (req, res) => {
  try {
    const { email, password } = req.body;
    const newToken = generateToken();
    
    if (!email || !password) {
      return res.status(400).end();
    }
    return res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(500).end();
  }
});

/* const regex = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)?$/i; 
const userBoolean = regex.test(value);
*/

app.listen(PORT, () => {
  console.log('Online');
});
