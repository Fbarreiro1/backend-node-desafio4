const {Router} = require("express");
const getAllProducts = require("../controllers/products.controllers/getAllProducts")
const getProductById = require("../controllers/products.controllers/getProductById")
const deleteProduct = require("../controllers/products.controllers/deleteProduct")
const updateProduct = require("../controllers/products.controllers/updateProduct")
const addProduct = require("../controllers/products.controllers/addProduct")

const router = Router();

router.get("/", getAllProducts)

router.get("/:id", getProductById)

router.delete("/:id", deleteProduct)

router.put("/:id", updateProduct)

router.post("/", addProduct)

module.exports =  router;