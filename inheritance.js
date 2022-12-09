class TeamMember{
    name;
    designation = 'Support web dev';
    address = 'BD'
    constructor (name){
        this.name = name;
    }
}


class Support extends TeamMember{
    groupSupportTime;
    constructor(name,address,time){
        super(name,address)
        this.groupSupportTime = time;
    }
    startsession(){
        console.log(this.name,'start session')
    }
}
const amir = new Support('Amir khan','BD',11);
const salman = new Support('salman khan','BD',9)
// calling simple function
amir.startsession()
console.log(salman)


class StudentCare extends TeamMember{
    giveRoutineTime;
    constructor(name ,address,time){
        super(name,address)
        this.giveRoutineTime = time;
    }
    buildAroutin(student){
        console.log(this.name,'Build a Routine')
    }
}


const alia = new StudentCare ('Alia','India')
const moyna = new StudentCare ('Moyna khan','BD',12)
console.log(moyna)
moyna.buildAroutin()


class NepDev extends TeamMember{
    codeEditor
    constructor(name,address,codeEditor){
        super(name,address)
        this.codeEditor = codeEditor;
    }
    releaseApp(version){
        console.log(this.name,'release app version', version)
    }
}
const developer = new NepDev('sourav bhuiyaan','Italy','VS Code')
console.log(developer)
developer.releaseApp(16.2)