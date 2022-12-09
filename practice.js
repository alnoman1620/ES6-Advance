// const array = [
//     {name:'sourav', age:25, address:'Rampura'},
//     {name:'afrin', age:17, address:'Kunjaban'},
//     {name:'Atika', age:23, address:'dhaka'},
//     {name:'siam', age:18, address:'wapda'},
// ]
// const age = array.map(x => x.name);
// console.log(age)

// const newArray = [1,2,3,4,5];

// const square = newArray.map(x => x * x)
// console.log(square)

// const obb = {
//     student:{name:'sourav', age2:25, address:'Rampura'},
// }
// const {name, age2, address} = obb.student;
// console.log(name,age2,address);

// Class

class Officers  {
 naame;
 designation;
 address = 'Dhaka';
 training = 'barisal'
 constructor(name,designation){
 this.naame = name;
 this.designation = designation
 }
}

const officerNameAbudllah = new Officers('abdillah', 'SI')
console.log(officerNameAbudllah)