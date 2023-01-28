const {
  getProductsByIdJson
} = require("./getProductsJson");


async function getProductById(req, res) {
  try {
    const {
      id
    } = req.params;

    const prods = await getProductsByIdJson(id);

    return res.send(prods)
  } catch (error) {
    error
  }

}

module.exports = getProductById;