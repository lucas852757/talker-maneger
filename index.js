const express = require('express');
const bodyParser = require('body-parser');
const { getFile } = require('./read.File');
const { generateToken } = require('./crypto');

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

app.post('/login', (req, res) => {
  try {
    const newToken = generateToken();
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).end();
    }
    return res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
