class Person {
    constructor(name, sex, id, dob) {
        this.name = name;
        this.sex = sex;
        this.id = id;
        this.dob = dob;
    }
    getStudentInfo() {
        return 'Student name ' + this.name + ' ' + this.sex + ' ' + this.id + ' ' + this.dob + ' ';
    }
    get getName() {
        return this.name
    }
    get getSex() {
        return this.sex
    }
    get getId() {
        return this.id;
    }
    get getDod() {
        return this.dob;
    }
    set setName(name) {
        this.name = name
    }
    set setSex(sex) {
        this.sex = sex
    }
    set setId(id) {
        this.id = id
    }
    set setDod(dob) {
        this.dob = dob
    }
}
class Student extends Person {
    constructor(room, rank, name, sex, id, dob) {
        super(name, sex, id, dob);
        this.room = room;
        this.rank = rank;
    }
    getInfo() {
        return this.getStudentInfo() + this.rank;
    }
}
var Student1 = new Student('10A1', 'Good', 'NVA', 'Male', '123', '1994')
console.log(Student1.getInfo())
















