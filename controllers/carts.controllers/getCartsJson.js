const fs = require("fs");
const {
	v4: uuidv4
} = require('uuid');
const {
	getProducts
} = require("../products.controllers/getProductsJson");

let path = "./carts.json";


async function getCarts() {
	try {
		if (fs.existsSync(path)) {

			const data = await fs.promises.readFile(path, "utf-8")

			const carts = JSON.parse(data);
			return carts;
		} else {
			console.log("El JSON esta vacio")
			const carts = []
			return carts;
		}
	} catch (error) {
		error;
	}

}

async function getCartByIdJson(cartId) {
	try {
		const carts = await getCarts();

		const cartFilt = carts.filter(cart => cart.id == cartId)

		if (cartFilt.length == 0) {
			return `Not found`
		} else {
			return cartFilt
		}
	} catch (error) {
		error;
	}
}


async function addCartJson(obj) {
	try {
		const {
			products
		} = obj;
		const carts = await getCarts();



		const cart = {
			id: uuidv4(),
			products: products ? products : []
		}

		carts.push(cart)

		await fs.promises.writeFile(path, JSON.stringify(carts, null, "\t"));
		const created = `Added cart with id: ${cart.id}`;
		return created;

	} catch (error) {
		error;
	}
}

async function addProductToCartJson(cid, pid, obj) {
	try {
		const {
			product,
			quantity
		} = obj;

		const carts = await getCarts();
		const products = await getProducts();
		const productById = products.find(product => product.id == pid);

		const cartById = carts.find(cart => cart.id == cid);

		let cartProduct = false;


		if (!cartById) {
			return `We could not find a cart with this ID`;
		} else if (!productById) {
			return `We could not find a product with this ID`;
		}




		const length = cartById.products.length;

		for (let i = 0; i < length; i++) {
			if (cartById.products[i].product == pid) {
				cartProduct = true
			}
		}



		const productToAdd = {
			product: product,
			quantity: quantity
		}


		if (cartProduct) {
			const productRepeated = cartById.products.find(p => p.product === pid);


			productRepeated.quantity += quantity;

			const updatedCarts = carts.filter(cart => cart.id !== cid);


			updatedCarts.push(cartById);

			await fs.promises.writeFile(path, JSON.stringify(updatedCarts, null, "\t"));
			return `Added product to cart with id: ${cid}`;
		} else {
			cartById.products.push(productToAdd);

			const newCarts = carts.filter(cart => cart.id !== cid);

			newCarts.push(cartById);

			await fs.promises.writeFile(path, JSON.stringify(newCarts, null, "\t"));
			return `Added product to cart with id: ${cid}`;
		}








	} catch (error) {
		error;
	}
}


/* async function addProductToCartJson(cid,pid,obj) {
	try{
		const {product,quantity} = obj;
		const carts = await getCarts();
		const products = await getProducts();
		const productById = products.find(product=> product.id == pid);
		const cartById = carts.find(cart=> cart.id == cid);
		console.log("El find del cartID devuelve:",cartById)	
		console.log("El find del productID devuelve:",productById)
		
		if(!cartById ) {
			return `We could not find a cart with this ID`;
		}
		else if (!productById) {
			return `We could not find a product with this ID`;
		  }


		  
		else {
			 const cartProduct = cartById.products.product == pid;
		console.log("El cartProduct devuelve:",cartProduct) 
			const newCarts = carts.map((cart,index) => {
				if(cart.id == cid)	{
					if(cart.products[index].id == pid) {
						cart.products[index] = {product:product,quantity:(cart.products[index].quantity+1)}
						return cart
					}
					cart.products.push = {product:product,quantity:quantity}
				
				}
				return cart
			})
			await fs.promises.writeFile(path, JSON.stringify(newCarts, null, "\t"));
			return `Added product to cart with id: ${cid}`
			return cartProduct ? `Added product to cart with id: ${cid}` : "Wrong product ID. Not added";
		}
	} 

	catch(error) {
		error;
	}
} */



module.exports = {
	getCarts,
	getCartByIdJson,
	addCartJson,
	addProductToCartJson
}