const express = require('express');
const router = express.Router();
//modelos
const User = require('../models/user');


//crear un usuario(POST/USER)
router.post('/',async(req, res)=>{
    try {
        const{nombre, email} = req.body;
        if(!nombre || !email){
            return res.status(400).json({mensaje: 'faltan datos para poder registrar el usuario'})
        }
        const newUser = new User({nombre, email});
        await newUser.save();
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({error: err.messaje});
    }
});

router.get('/:id', async(req, res)=>{
    try {
        const user = await User.findBYId(req.params.id)
        if (!user){
            return res.status(404).json({error: 'usuario no encontrado'});
        }
        res.json(user)

    } catch (err) {
        res.status(400).json({error: err.messaje})
    }
});

router.get('/', async(req, res)=>{
    const users = await User.find();
    if(users.length === 0){
        return res.status(400).json({mensaje: 'la base de datos esta vacia'})
    }
    res.json(users),
    res.j
})

module.exports = router;
