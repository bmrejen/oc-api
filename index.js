require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require("./models/Product")

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.post("/api/products", async (req, res) => {
  try {
    const product = await createProduct(req.body)
    res.send({ product })
  } catch (err) {
    console.error(err)
  }
})

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params
    const product = await updateProduct(id, req.body)
    res.send({ message: "Modified!" })
  } catch (err) {
    console.error(err)
  }
})

app.delete("/api/products/:id", async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id)
    res.send({ message: "Deleted!" })
  } catch (err) {
    console.error(err)
  }
})

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params
    const product = await getProduct(id)
    res.send({ product })
  } catch (err) {
    console.error(err)
  }
})

app.get("/api/products", async (req, res) => {
  const result = await getProducts()
  res.send({ products: result })
})

app.get("/", (req, res) => {
  res.send("Hello " + req.query.name)
})

app.listen(port, () => {
  console.log("Server listening on port " + port)
})
