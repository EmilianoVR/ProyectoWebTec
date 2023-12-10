const express = require('express');
const router = express.Router();
const path = require('path');

// Usuario y contraseña hardcoded para pruebas
const usuarioPrueba = 'Emiliano';
const contraseñaPrueba = 'Emitec';

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

router.post('/', (req, res) => {
    const { usuario, contraseña } = req.body;

  
    if (usuario === usuarioPrueba && contraseña === contraseñaPrueba) {
      
        res.redirect('/dashboard');
    } else {
       
        res.sendFile(path.join(__dirname, 'login.html'));
    }
});

module.exports = router;
