const express = require("express")
const cors = require('cors')
const app = express()

app.use(express.json(), express.urlencoded({ extended: true }), cors());


require("dotenv").config()

require("./config/config.mongoose")
const PORT = process.env.PORT

const AllProductsRoutes = require("./routes/product.routes")
AllProductsRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is Running On PORT : ${PORT}`)
})