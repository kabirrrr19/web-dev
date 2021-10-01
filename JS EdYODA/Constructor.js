var person = {
    name: 'Atul',
    yearOfBirth: 2001,
    job : 'Engineering Student',
    age = function (){
        console.log(2021 - this.yearOfBirth);
    }
}

function Person(pName, pYearOfBirth, pJob) {
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;
    this.age = function (){
        console.log(2021 - this.yearOfBirth);
    };
}

var John = new Person('Yash', 1999, 'Vella Aadmi');
// console.log(John.age()); with this method we get undefined after age as function does not return anyting to this console.log function
John.age();

var Claire = new Person('Ritesh', 1997, 'AirForce Aspirant');
// console.log(Claire);
Claire.age();

person.age();