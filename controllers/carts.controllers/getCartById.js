const {
  getCartByIdJson
} = require("./getCartsJson");


async function getCartById(req, res) {
  try {
    const {
      id
    } = req.params;

    const carts = await getCartByIdJson(id);

    return res.send(carts)
  } catch (error) {
    error
  }

}

module.exports = getCartById;