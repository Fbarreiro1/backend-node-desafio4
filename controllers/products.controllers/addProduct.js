const {
  addProductJson
} = require("./getProductsJson");

async function addProduct(req, res) {
  try {

    let p1 = {
      ...req.body
    }


    const prods = await addProductJson(p1);

    return res.send(prods)
  } catch (error) {
    error
  }

}

module.exports = addProduct;