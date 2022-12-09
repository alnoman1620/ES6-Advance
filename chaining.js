// Declare variable based on the object property
const myObject = {x:10,
    y:20,
    z:{ a:22,
        b:23
    },
    t:50
}

const {x,y,t} = myObject;
const {a,b} = myObject.z;

console.log(x,y,t,a,b)

//destructuring Array

const [p,q] = [45,37];
console.log(p,q)


 //another way getting value from object (destructuring)

 const{name,id,batch} = {name:'noman',id:1620,batch:'24th'};
 console.log(name,id,batch)

 //Optional Chinning (using [?] after object or property name)

const myObject2 = {a:4,b:6}
console.log('myObject2',myObject2?.c?.d);