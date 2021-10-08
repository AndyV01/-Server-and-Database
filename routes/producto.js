const express = require('express');

const router = express.Router();

const Products = require('../models/product')

//renderizacion de vistas de productos por Id
router.get("/:id", async function (req, res) {
    const id = parseInt(req.params.id)
    const elProducto = await Products.findOne({ where: { id: id } })
    res.render("producto", {
        elProducto
     }) 
})

module.exports = {
    router: router
  }