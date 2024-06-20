// const student = {
//     fullName : "Prabhpreet Singh",
//     marks :95,
//     printMarks : function() {
//         console.log("marks =" ,this.marks); // student.marks
//     }
// };

// // Creating Prototype 

// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
//     calcTax() {
//         console.log("Tax rate is 20%");
//     },
// };
 // if object & prototype have same method, object method will be used.

// karanArjun.__proto__ = employee; // set prototype by using __proto__ ;

// Classes in JS

class toyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new toyotaCar();  //, making an object using existing classes 

// inheritence in JS 

class parent {
    hello() {
        console.log("hello")
    }
}

class child extends parent{}

let obj = new child();

// if child and parent have same method, child method will be used[method overriding];


// Super Keyword in JS

class Person {
    constructor() {
        this.species = "homo sapiens"
    }
    eat() {
        console.log("eat")
    };
};

class engineer{
    constructor(branch) {
        super(); // to invoke parent class constructor
        this.branch = branch;
    }
    work() {
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("chemical engg");


// Practice Questions

let DATA = "secret information"

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };

    viewData() {
        console.log("data =", DATA)
    };
}

class Admin extends User {
    constructor(name , email) {
        super(name , email);
    }
    editData() {
        DATA = "some new value"
    };
}

let student1 = new User(prabh , prbemail.com);
let student2 = new User(gun , gunemail.com);

let Admin1 = new Admin(admin , adminemail.com) 


// // Error Handling

// try{
//     // your code
// } catch(err) {
// // console.log(err);
// }
