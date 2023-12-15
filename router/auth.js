
/*
    path: /api/login
*/

const {Router} = require('express');
const router = Router();
//controladores
const { crearUsuario, login, renewToken } = require('../controller/auth');

//crear nuevos usuarios
router.post('/new', crearUsuario)
//Login
router.post('/', login)
//revalidar token
router.get('/renew',  renewToken)

module.exports = router;