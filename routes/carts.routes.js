const {
    Router
} = require("express");

const getCartById = require("../controllers/carts.controllers/getCartById")
const addProductToCart = require("../controllers/carts.controllers/addProductToCart")
const addCart = require("../controllers/carts.controllers/addCart")

const router = Router();


router.get("/:id", getCartById)

router.post("/:cid/products/:pid", addProductToCart)

router.post("/", addCart)

module.exports = router;