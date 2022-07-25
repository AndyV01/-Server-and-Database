const express = require('express')
const router = express.Router()

const News = require('../models/new')

//renderizacion de vistas del Blog por Id de noticia
router.get("/:id", async function (req, res) {
    try{
    const id = parseInt(req.params.id)
    const laNoticia = await News.findOne({ where: { id: id } })
   return res.json({
        success:true, new: laNoticia 
     }) 
    } catch(exception){
        return res.json({ 
            success: false, error: exception
          })
    } 
})

router.get("/", async function (req, res) {
    try{
    const laNoticia = await News.findAll()
    return res.json({
          success:true, new: laNoticia
        }) 
    } catch(exception){
        return res.json({ 
            success: false, error: exception
          })
    }
    })       

module.exports = {
    router: router
  }