const express = require ("express")

const path = require ('path')

const app = express()
 
app.set("view engine", "ejs")

const listOfProducts = require("./public/data/listofProducts")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "public")))

const users = require("./public/data/users")

app.get("/", function(req, res) {
    res.sendFile (path.join
        (__dirname, "views", "home.html"))
})

//formulario de inscripcion
app.post("/suscribe", function(req, res){
    const id = users.length + 1
    const name = req.body.name
    const email = req.body.email
    const newUser = {
        id,
        name,
        email
    }
    if (newUser.name && newUser.email){
        users.push(newUser)
        res.redirect("/suscripto_ok")
    } else {
        const response = {
            "error": "Debes completar los campos name y mail"
        }
        res.status(400)
        res.send(response)
    }
})

app.get("/suscripto_ok", function(req, res) {
    res.sendFile (path.join
        (__dirname, "views", "suscripto.html"))
})

app.get("/blog", function(req, res) {
    res.sendFile (path.join
        (__dirname, "views", "blog.html"))
})

app.get("/catalogo", function(req, res) {
    res.sendFile (path.join
        (__dirname, "views", "Catalogo.html"))
})

//renderizacion de vistas de productos por Id
app.get("/producto/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const elProducto = listOfProducts.find(function(producto){
        return producto.id === id
    })
    res.render("producto", elProducto)
})

app.listen(4000)