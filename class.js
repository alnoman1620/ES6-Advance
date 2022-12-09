class Support {
    name;
    designation = 'Support web dev';
    address = 'BD'
    constructor (name){
        this.name = name;
    }
    startsession(){
        console.log(this.name,'start session')
    }
}
const amir = new Support('Amir khan');
// const salman = new Support()

// calling simple function
amir.startsession()
console.log(amir)