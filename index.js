const button1 = document.getElementById("5%");
const button2 = document.getElementById("10%");
const button3 = document.getElementById("15%");
const button4 = document.getElementById("20%");
const button5 = document.getElementById("25%");
const custom1 = document.getElementById("custom");
const mainBill = document.getElementById("bill");
const buraAll = document.getElementById("bura");
const tipPerson = document.getElementById("tipperson");
const totalPerson = document.getElementById("totalperson");
const perPeople = document.getElementById("people");


function changeText1(totalBill) {
    totalBill.innerHTML = "$" + Number(mainBill.value);
}

function changeText2(totalPerson) {
    totalPerson.innerHTML = "$" + Number(perPeople.value) / Number(mainBill.value);
}


button1.addEventListener('click', getValue)
function getValue() {
    let sum = 0;
    mainBill.innerHTML = Number(mainBill.value);

}
button2.addEventListener('click', getValue2)
function getValue2() {
    let sum = 0;
    mainBill.value = Number(mainBill.value) + Number(button2.value);

}

button3.addEventListener('click', getValue3)
function getValue3() {
    let sum = 0;
    mainBill.value = Number(mainBill.value) + Number(button3.value);

}

button4.addEventListener('click', getValue4)
function getValue4() {
    let sum = 0;
    mainBill.value = Number(mainBill.value) + Number(button4.value);

}

button5.addEventListener('click', getValue5)
function getValue5() {
    let sum = 0;
    mainBill.value = Number(mainBill.value) + Number(button5.value);

}

custom1.addEventListener("change", () => {
    mainBill.value = Number(mainBill.value) + Number(custom1.value);
});


// tipPerson.addEventListener("change", () => {
//     tipPerson.textContent = "$" + Number(mainBill.value) ;
//  });


buraAll.addEventListener("click", () => {
    custom1.value = 0;
    mainBill.value = 0;
    tipPerson.textContent = "$" + 0;
    totalPerson.textContent = "$" + 0;
});






