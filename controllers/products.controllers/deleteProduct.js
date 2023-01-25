const {deleteProductJson} = require("./getProductsJson");


async function deleteProduct (req, res)  {
    try  {
      const { id } = req.params;
       
      const prods = await deleteProductJson(id);
        
      return res.send(prods)
    }
      catch(error) {
        error
      }
    
  }

  module.exports = deleteProduct;