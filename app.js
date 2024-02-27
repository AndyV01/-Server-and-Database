const express = require("express")
const path = require('path')
const app = express()
const cors = require ('cors')
const jwt = require('jsonwebtoken')


app.use(cors())

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({
    extended: true
})); 


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","GET,POST");
  next();
});

app.post('/api/status', function (req, res, next) {
    
});


module.exports = app;


const { sequelize } = require("./db")

require('dotenv').config()


const { router: blogRouter } = require('./routes/blog')
const { router: catalogoRouter } = require('./routes/catalogo')
const { router: productoRouter } = require('./routes/producto')
const { router: suscribeRouter } = require('./routes/suscribe')
const { router: loginRouter } = require('./routes/login')
const { router: orderRouter } = require('./routes/orders')

app.use(express.static(path.join(__dirname, "public")))


app.get("/", function (req, res) {
    res.render("home")
})

app.get("/suscripto_ok", function (req, res) {
    res.render("suscripto")
})



app.use('/producto', productoRouter)
app.use('/blog', blogRouter)
app.use('/catalogo', catalogoRouter)
app.use('/suscribe', suscribeRouter)
app.use('/login', loginRouter)
app.use('/order', orderRouter)

const PORT = 3000;  

// Test DB connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => {
    console.log('Error connecting Sequelize:', error);
  });


app.listen(process.env.PORT || PORT, async () => {
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