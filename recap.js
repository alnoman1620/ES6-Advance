
const findMax = (array) =>{
    const max = Math.max(...array);
    return max;
}
const arrayValue = findMax([1,2,3,4,5,6]);
console.log(`the highest number in the array is: ${arrayValue}`);