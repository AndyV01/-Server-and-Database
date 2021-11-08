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
       return res.json({
            succes: false
       })
   } else {
    const order = await Order.create({
        user_id: usuarioRegistrado.id,
        product_id: productId,
        adress
    })
     return res.json ({
         succes: true
     })
   }
} catch (error){
    return res.json({
        error
    })
}
})

module.exports = {
    router: router
}