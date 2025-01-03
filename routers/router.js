const express = require('express');
const router = express.Router();
// const usuarios = require('../controllers/login');
// const manejo = require('../controllers/regis');


const session = require('express-session');

// router.use(session({
//     secret: '6FSRSDATEMRGYEAJLPCAWTUVL4SBHCPD',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 3600000
//     }
// }));

// router.get('/home', (req,res)=>{
//     if(req.session.rol=='admin'){
//         res.render('pages/homeAdmin');
//     } else {
//         res.render('pages/home');
//     }
// });

// router.get('/', (req, res) =>{
//     res.render('pages/login')
// } )

// router.get('/creacion',(req,res) => {
//     res.render('pages/creacionUsuarios')
// })

router.get('/Cartera', (req,res)=>{
    res.render('pages/cartera')
})

// router.post('/login',usuarios.LoginUsuarios);
// router.get('/logout',usuarios.LogOutUsuarios);
// router.get('/validar', usuarios.validarSesion);

// router.get('/tableUsuarios',manejo.Usuarios);
// router.post('/registrarU', manejo.RegistrarU);
// router.post('/actualizarU', manejo.ActualizarU);
// router.post('/eliminarU', manejo.EliminarU);


module.exports = router;