let inputEl = document.getElementById("inputEl");
let selectEl = document.getElementById("selectEl");
let ans = document.getElementById("paraEl");
let btnEl = document.getElementById("btnEl");
let crtEl = document.getElementById("sup");

function change() {
    let degree = inputEl.value;
    console.log(degree);
    let currentDegree = selectEl.value;
    console.log(currentDegree);
    if (currentDegree === 'Celcius') {
        let cnvrtFar = (degree * 9) / 5 + 32;
        ans.classList.add("ans-board");
        ans.textContent = cnvrtFar + " Fahrenheit";
    }
    if (currentDegree === 'Fahrenheit') {
        let cnvrtCel = ((degree - 32) * 5) / 9;
        ans.textContent = cnvrtCel + " Celcius";
        ans.classList.add("ans-board");
    }
}