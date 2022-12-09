class MainTeam {
    name;
    dept;
    company ='IST';
    constructor(name, dept){
        this.name = name;
        this.dept = dept;
    }
}

class TeamA  extends MainTeam{
    position;
    constructor(name,dept,position){
        super(name,dept,);
        this.position = position;
     }
     updateSoftware(version){
        console.log('Update The Software Version', version)
     }
}
class TeamB  extends MainTeam{
    position;
    constructor(name,dept,position){
        super(name,dept);
        this.position = position;
     }
     inviteStudent(){
        console.log('Invite The Student')
     }
}

const memberOne = new TeamA('sourav','CSE','Software-Engineer');
const memberTwo = new TeamB('Afrin','CSE','Network-Engineer');
memberOne.updateSoftware("2.4.6");
memberTwo.inviteStudent()
console.log(memberOne,memberTwo);
