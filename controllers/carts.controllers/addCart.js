const {addCartJson} = require("./getCartsJson");

async function addCart (req, res) {
    try  {
      
      let p1 = {...req.body}
     
    
      const carts = await addCartJson(p1);
        
      return res.send(carts)
    }
      catch(error) {
        error
      }
    
  }

  module.exports = addCart;