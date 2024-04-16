/*
* File: app.js
* Author: Kriston Attila
* Copyright: 2024, Kriston Attila
* Group: Szoft I/1/N
* Date: 2024-04-16
* Github: https://github.com/atekthebro/
* Licenc: GNU GPL
*/

const a_tengelyInput = document.querySelector("#a_tengely")
const b_tengelyInput = document.querySelector("#b_tengely")
const terfogatInput = document.querySelector("#terfogat")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', () => {
    startCalc();
})

function startCalc() {
    let a_tengely = Number(a_tengelyInput.value)
    let b_tengely = Number(b_tengelyInput.value)
    let terfogat = calcterfogat(a_tengely,b_tengely)
    terfogatInput.value = terfogat.toFixed(2)
}


function calcterfogat (a_tengely,b_tengely) {
    return Math.PI*4 / 3 *
    a_tengely * Math.pow(b_tengely,2)

}