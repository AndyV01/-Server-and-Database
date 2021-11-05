const express = require('express')

const router = express.Router()

const Products = require('../models/product')

//renderizacion de vistas de productos por Id
router.get("/:id", async function (req, res) {
    try{
    const id = parseInt(req.params.id)
    const elProducto = await Products.findOne({ where: { id: id } })
    return res.json( {
        success: true, product: elProducto
     }) 
    } catch(exception) {
        return res.json({ 
          success: false, error: exception
        })
      }
    })

module.exports = {
    router: router
  }