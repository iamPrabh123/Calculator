
// h2.innerText = h2.innerText + " from Apna College students "

// let divs = document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let newBtn = document.createElement("button");
//  newBtn.innerText = "click me";
//  console.log(newBtn);

// let div = document.querySelector("div");
// console.log(div);

// div.append(newBtn);

// Create a new paragraph element, and append it to the end of the document body
// const p = document.createElement("p");
// document.body.appendChild(p);
// console.log(p);

// Practice Question;

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.backgroundColor = "red"
// newBtn.style.color = "white"

// document.querySelector("body").prepend(newBtn);



//  let para = document.querySelector("p");
// console.log(para);

// para.classList.add("content")

// Events 

// Node.event() => {

// }


// event listeners 

// let btn1 = document.querySelector("#btn1")

// btn1.addEventListener("click", (evt) => {
//     console.log("button was clicked")
//     console.log(evt.target)

// });

// Practice Question for events 

let btn1 = document.querySelector("#btn1");
let mode = "light";

btn1.addEventListener("click", () => {
    if(mode === "light") {
        mode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        mode = "light"
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(mode);
});

// let headings = document.querySelector(".color").style.color = "yellow";
// console.log(headings);

  



