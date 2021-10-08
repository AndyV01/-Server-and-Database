const express = require('express');
const router = express.Router();

const News = require('../models/New')

//renderizacion de vistas del Blog por Id de noticia
router.get("/:id", async function (req, res) {
    const id = parseInt(req.params.id)
    const laNoticia = await News.findOne({ where: { id: id } })
    res.render("blog", {
        laNoticia
     }) 
})

router.get("/", async function (req, res) {
    const laNoticia = await News.findAll()
    res.render("home-blog",{
           laNoticia
        }) 
    })       

module.exports = {
    router: router
  }