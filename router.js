const express = require('express');
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

const router = express.Router();

router.get('/talker/:id', returnsSpeaker);

router.get('/talker', peopleRegistered);

router.post('/login', validateEmail, validatePassword, login);

router.post('/talker', validateToken,
validateName, validateAge, 
validateTalk, validateWatchedAtFormat, validateRate, registerPeople);

router.put('/talker/:id', 
validateToken, validateName, 
validateAge, validateTalk, validateWatchedAtFormat, validateRate, editSpeaker);

module.exports = router;