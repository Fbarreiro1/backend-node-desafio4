const {getProducts} = require("./getProductsJson");


async function getAllProducts (req, res)  {
    try  {
      let { limit } = req.query;
       limit = parseInt(limit)
      
     
      const prods = await getProducts();
      
       if(!limit || limit > prods.length || limit < 1) {
        
        return res.json(prods);
      } 
     
     const iterar = (limit) => {
      const prodslimitado = [];
      let i = 0;
        while(i < limit) {
          prodslimitado.push(prods[i]);
        i++
      }
      return prodslimitado;
    }
  
    const prodslimitado = iterar(limit);
  
    return res.send(prodslimitado)
     }
      
     catch(error) {
        error }
      }

      module.exports = getAllProducts;