const {
  addProductToCartJson
} = require("./getCartsJson");

async function addProductToCart(req, res) {
  try {
    const {
      cid,
      pid
    } = req.params;
    

    const carts = await addProductToCartJson(cid, pid, req.body);

    return res.send(carts)
  } catch (error) {
    
    return res.send("error aca")
  }

}

module.exports = addProductToCart;