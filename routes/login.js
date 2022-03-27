const jwt = require('jsonwebtoken')
const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()

const Users = require('../models/user')

//Inicio de Secion 
router.post("/", async function (req, res) {
    const { email, password } = req.body
    let resultado = false
    const usuarioObj = await Users.findOne({ where: { email: email } })

    if (usuarioObj !== null) {
        resultado = await bcrypt.compare(password, usuarioObj.password)
    }

    if (resultado) {
        return res.json({
            success: true,
         })
     }
    return res.json({
        error: "Usuario o contraseña incorrectos",
        success: false,
    })
})

module.exports = {
    router: router
}