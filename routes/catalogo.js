const express = require('express')

const router = express.Router()

const Products = require('../models/product')

router.get("/", async function (req, res) {
    try{
    const listOfProducts = await Products.findAll()
    return res.json( { 
        success: true, list: listOfProducts
    } )
} catch(exception) {
    return res.json({ 
      success: false, error: exception
    })
  }
})
module.exports = {
    router: router
  }