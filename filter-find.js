// filter
//we can use cobdition in the filter(condition).
const nums = [1,2,3,4,5,6,9,8,7];
const bigNum = nums.filter(x => x > 5);
console.log(bigNum)

const array = [
    {name:'sourav Noman', age:25, address:'Rampura'},
    {name:'afrin sultana', age:17, address:'Kunjaban'},
    {name:'Atika', age:23, address:'dhaka'},
    {name:'siam', age:18, address:'wapda'},
]

const bigName = array.filter(x => x.name.length > 5);
console.log(bigName);


//find
const nums2 = [1,2,3,4,5,10,6,9,8,7];
const findBig = nums2.find(x => x > 5)
console.log(findBig);