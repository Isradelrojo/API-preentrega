// const method = process.argv[2];
// const resource = process.argv[3];




let [ , , method, resource, ...params] = process.argv;


//console.log(params);

if (!method || !resource) {
    console.log('Envie os parâmetros corretamente');
    process.exit(1);
}

method = method.toUpperCase();
resource = resource.toLowerCase();
const id = resource.slice('9');



if (method === 'GET' && resource === 'products') {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
}else if (method === 'GET' && resource === 'products/'+ id) {
    fetch('https://fakestoreapi.com/products/' + id)
  .then(response => response.json())
  .then(data => console.log(data));
}

const title = params[0];
const price = parseFloat(params[1]);
const category = params[2];

if (method === 'POST' && resource === 'products') {
    const product = { title, price, category };
fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data));
};
