const express = require('express');
const rescue = require('express-rescue');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateTalk = require('./middlewares/validateTalk');
const validateWatchedAtFormat = require('./middlewares/validateWatchedAtFormat');
const validateRate = require('./middlewares/validateRate');
const peopleRegistered = require('./middlewares/peopleResgistered');
const login = require('./middlewares/login');
const registerPeople = require('./middlewares/registerPeople');
const returnsSpeaker = require('./middlewares/returnsSpeaker');
const editSpeaker = require('./middlewares/editSpeaker');
const removeSpeaker = require('./middlewares/removeSpeaker');
const searchTerm = require('./middlewares/searchTerm');

const router = express.Router();

router.get('/talker/search', validateToken, rescue(searchTerm));

router.get('/talker/:id', rescue(returnsSpeaker));

router.get('/talker', rescue(peopleRegistered));

router.post('/login', validateEmail, validatePassword, login);

router.post(
  '/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAtFormat,
  validateRate,
  rescue(registerPeople),
);

router.put(
  '/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAtFormat,
  validateRate,
  rescue(editSpeaker),
);

router.delete('/talker/:id', validateToken, rescue(removeSpeaker));

module.exports = router;
