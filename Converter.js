let numberEl = document.getElementById("num-container")
let convertBtn = document.getElementById("convert--btn")
const lengthEl = document.getElementById("M-F")
const volumeEl = document.getElementById("L-G")
const massEl = document.getElementById("K-P")

convertBtn.addEventListener("click", function(){
    const feet = Number(numberEl.value) * 3.281
    const meter = Number(numberEl.value) * 0.304
    const liter = Number(numberEl.value) * 4.546
    const gallon = Number(numberEl.value) * 0.264
    const kg = Number(numberEl.value) * 0.453
    const pound = Number(numberEl.value) * 2.204
    lengthEl.textContent = `${Number(numberEl.value)} meters = ${feet.toFixed(3)} feet | ${Number(numberEl.value)} feet = ${meter.toFixed(3)} meters`
    volumeEl.textContent = `${Number(numberEl.value)}  liters = ${gallon.toFixed(3)} gallons | ${Number(numberEl.value)} gallons = ${liter.toFixed(3)} liters`
    massEl.textContent = `${Number(numberEl.value)} kilos = ${pound.toFixed(3)} pounds | ${Number(numberEl.value)} pounds = ${kg.toFixed(3)} kilos`
})