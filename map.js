// MAP

// const numbers = [4,6,8,10];
// const values = []

// const doubleIt = num => num * 2 
// for(const number of numbers){
//      const double = doubleIt(number);
//      values.push(double);

// }
// console.log(values);

//single line 
// (loop throuh each element )
// (call the function for each element)
// const doubleIt2 = x => x*2;
// const numbers2 = [1,2,3,4];
// const output = numbers2.map(doubleIt2)
// console.log(output);

// // .map(function it self)

// const array = [5,2,3];
// const square = array.map(x => x * x);
// console.log(square);



//map practice 
// const array3 = [1,2,3,4];
// const doubleArray = array3.map(x => x * 2);
// console.log(doubleArray);


const array3 = [1,2,3,4];
const array4 =[]
const pushArray = array3.map(x => array4.push(x));
console.log(pushArray);