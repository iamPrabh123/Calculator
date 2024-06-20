// How promises work

function asyncFunc() {
    return new Promise((resolve , reject) => {
         setTimeout(() => {
          console.log("data1")         // this work is mainly done by the APIs .
          resolve("success")
         }, 4000);
    })
};

console.log("fetching data1 ....")
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
})