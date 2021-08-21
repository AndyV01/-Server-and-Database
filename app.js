const express = require ("express")

const path = require ('path')

const app = express()
 
const users = require("./users")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res) {
    res.sendFile (path.join
        (__dirname, "views", "home.html"))
})

app.post("/suscripto_ok", function(req, res){
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

 










app.listen(4000)