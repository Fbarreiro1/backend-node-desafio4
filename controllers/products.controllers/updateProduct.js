const {updateProductJson} = require("./getProductsJson");

 async function updateProduct (req, res) {
    try  {
      const { id } = req.params;
      let p1 = {...req.body}
     
    
      const prods = await updateProductJson(id,p1);
        
      return res.send(prods)
    }
      catch(error) {
        error
      }
    
  }

  module.exports = updateProduct;