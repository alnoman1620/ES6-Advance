const friends = ['sourav','abdullah','atika'];
const fLength = friends.map(x => x.length)
// console.log(fLength);

//objects in array

const products = [
    {name: 'laptop', price: 200000, color: 'black'},
    {name: 'mobile', price: 20000, color: 'white'},
    {name: 'pen', price: 20, color: 'red'},
    {name: 'watch', price: 2000, color: 'grey'},
    {name: 'air buds', price: 1000, color: 'yellow'}
]

const nameArray = products.map(x => x.name);
const priceArray = products.map(x => x.price);
console.log(nameArray,priceArray);

