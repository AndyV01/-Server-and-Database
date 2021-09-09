const express = require ("express")

const path = require ('path')

const app = express()

const bcrypt = require('bcrypt')
 
app.set("view engine", "ejs")

const listOfProducts = require("./public/data/listofProducts")

const listOfLink = require ("./public/data/listofLink")

const users = require("./public/data/users")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res) {
    res.render ("home")
})

//formulario de inscripcion
app.post("/suscribe", async function(req, res){
    const id = users.length + 1
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const usuario = req.body
    usuario.password = await bcrypt.hash(req.body.password, 10)
    const newUser = {
        id,
        name,
        email,
        password
    }
    if (newUser.name && newUser.email && newUser.password){
        users.push(newUser)
        res.redirect("/suscripto_ok")
        console.log(newUser)
    } else {
        const response = {
            "error": "Debes completar los campos name y mail"
        }
        res.status(400)
        res.send(response)
    }
})

app.get("/suscripto_ok", function(req, res) {
    res.render ("suscripto")
})

app.get("/blog", function(req, res) {
    res.render ("home-blog")
})

app.get("/catalogo", function(req, res) {
    res.render ("Catalogo")
})

//renderizacion de vistas de productos por Id
app.get("/producto/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const elProducto = listOfProducts.find(function(producto){
        return producto.id === id
    })
    res.render("producto", elProducto)
})

//renderizacion de vistas del Blog por Id de noticia
app.get("/blog/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const laNoticia = listOfLink.find(function(noticia){
        return noticia.id === id
    })
    res.render("blog", laNoticia)
})

app.listen(4000)
