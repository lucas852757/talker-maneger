const express = require('express');
const bodyParser = require('body-parser');
const { getFile } = require('./functions/readFiles');
const { generateToken } = require('./crypto');
const { setFile } = require('./functions/writeFiles');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

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
    return res.status(500).end();
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
    return res.status(500).end();
  }
});

app.post('/talker', validateToken,
validateName, validateAge, 
validateTalk, validateWatchedAtFormat, validateRate, async (req, res) => {
  const people = await getFile();
  const { name, age, talk } = req.body;
  /* req.headers.authorization = generateToken(); */
  const token = generateToken();
  people.push({ name, age, talk });
  setFile(people);
  return res.status(201).json({ token });
});
app.listen(PORT, () => {
  console.log('Online');
});
