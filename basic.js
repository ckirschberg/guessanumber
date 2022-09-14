import { Product } from "./Product.js";

const p1 = {name: 'Car', price: 30000, quantityInStock: 2};
const p2 = new Product("bike", 2000, 3);
const p3 = new Product("Airplane", 100000, 1);

let products = [];
products.push(p1)
products.push(p2)
products.push(p3)

let counter = 0;
products.forEach((product) => {
    console.log(product);
    counter = counter + product.quantityInStock;
})

console.log(counter);