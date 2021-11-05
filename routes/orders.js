const express = require('express')
const router = express.Router()

const Order = require('../models/order')
const Users = require('../models/user')

router.post("/:id", async (req, res) => {
    try {
   const{ email, adress } = req.body
   const productId = req.params.id 
   const usuarioRegistrado = await Users.findOne({ where: { email: email } })
   
   if(!usuarioRegistrado){
       res.status(400).send({ message: "Usuario no esta Registrado"})
   }

   const order = await Order.create({
       user_id: usuarioRegistrado.id,
       product_id: productId,
       adress
   })
    return res.json ({
        sucsses: true,
    })
} catch (exception){
    return res.json({
        error: exception
    })
}
})

module.exports = {
    router: router
}