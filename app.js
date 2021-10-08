const express = require("express")
const path = require('path')
const app = express()
const bcrypt = require('bcrypt')

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({
    extended: true
})); 
 
const { sequelize } = require("./db")

require('dotenv').config()

const { router: blogRouter } = require('./routes/blog')
const { router: catalogoRouter } = require('./routes/catalogo')
const { router: productoRouter } = require('./routes/producto')
const { router: suscribeRouter } = require('./routes/suscribe')

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (req, res) {
    res.render("home")
})

app.get("/suscripto_ok", function (req, res) {
    res.render("suscripto")
})

//Inicio de Secion 
app.post("/login", async function (req, res) {
    const { usuario, password } = req.body
    let usuarioObj = null
    let resultado = false

    user.forEach(function (usr) {
        if (usr.email === usuario) {
            usuarioObj = usr
        }
    })
    if (usuarioObj !== null) {
        resultado = await bcrypt.compare(password, usuarioObj.password)
    }
    if (resultado) {
        res.redirect("/")
        return
    }
    res.render ("error_login")
})

app.use('/producto', productoRouter)
app.use('/blog', blogRouter)
app.use('/catalogo', catalogoRouter)
app.use('/suscribe', suscribeRouter)

const PORT = 4000;

// Test DB connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => {
    console.log('Error connecting Sequelize:', error);
  });

app.listen(PORT, async () => {
  console.log(`Server listening at port ${PORT}`);  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});