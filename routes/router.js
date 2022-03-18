const express = require('express');
const router = express.Router();
const auth = require('./../controllers/authController');

router.get('/', (req, res) => {
    res.send('PÁGINA DE INICIO')
})

router.get('/login', (req, res) => {
    res.send('INICIO DE SESION')
})

router.get('/register', (req, res) => {
    res.send('REGISTRO')
})

router.post('/register', auth.register);

module.exports = router;