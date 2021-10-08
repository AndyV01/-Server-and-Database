const express = require('express');

const router = express.Router();

const Products = require('../models/product')

router.get("/", async function (req, res) {
    const listOfProducts = await Products.findAll()
    res.render("Catalogo", { 
        listOfProducts
    } )
})
module.exports = {
    router: router
  }