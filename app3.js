// const URL = "https://cat-fact.herokuapp.com/facts"



// const getFacts = async () => {
//     console.log("getting data.....");
//     let response = await fetch(URL);
// console.log(response); // JSON format Javascript Object Notation;
// let data = response.json();
// console.log(data);
// }

const BASE_URL = "https://cdn.jsdelivr.net/gh/@fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn");



for (let select in dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        } 
        select.append(newOption);
    };

    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target)
    })
}


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList(currCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click" , (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
})