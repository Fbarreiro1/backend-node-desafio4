const {addProductToCartJson} = require("./getCartsJson");

async function addProductToCart (req, res) {
    try  {
      const {cid,pid} = req.params;
        console.log(req.params);
      
      const carts = await addProductToCartJson(cid,pid, req.body);
      
      return res.send(carts)
    }
      catch(error) {
        console.log("error aca");
        return res.send("error aca")
      }
    
  }

  module.exports = addProductToCart;