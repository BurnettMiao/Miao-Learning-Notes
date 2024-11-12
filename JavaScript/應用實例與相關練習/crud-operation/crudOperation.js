// 模擬資料庫
let products = [
  { id: 1, name: 'Product1', price: 10 },
  { id: 2, name: 'Product2', price: 20 },
  { id: 3, name: 'Product3', price: 30 },
];

function createProduct(name, price) {
  // 自動生成一個 ID
  const newId = products.length ? products[products.length - 1].id + 1 : 1;
  const newProduct = { id: newId, name: name, price: price };
  products.push(newProduct);
  console.log('Product created:', newProduct);
}

function readProducts() {
  console.log('All products:', products);
}

function readProductsById(id) {
  const product = products.find((prod) => prod.id === id);
  if (product) {
    console.log('Product found:', product);
  } else {
    console.log(`Product with ID ${id} not found.`);
  }
}

function updateProduct(id, newName, newPrice) {
  const product = products.find((prod) => prod.id === id);
  if (product) {
    product.name = newName || product.name;
    product.price = newPrice || product.price;
    console.log('Product Update', product);
  } else {
    console.log(`Product with ID ${id} not found.`);
  }
}

function deleteProduct(id) {
  const productIndex = products.findIndex((prod) => prod.id === id);
  if (productIndex !== -1) {
    const deleteProduct = products.splice(productIndex, 1);
    console.log('Product deleted', deleteProduct[0]);
  } else {
    console.log(`Product with ID ${id} not found.`);
  }
}

createProduct('orage', 2);
// deleteProduct(1);
readProducts();
