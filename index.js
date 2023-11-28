const inputEl = document.getElementById("input-el")
const meterFeetEl = document.getElementById("meter-feet")
const litersGallonsEl = document.getElementById("liters-gallons")
const kilogramsPoundsEl = document.getElementById("kilograms-pounds")
const convertBtn = document.getElementById("convert-btn").addEventListener("click", function() {
    convertInput()
})

function convertInput() {
    meterFeetEl.innerHTML = `${inputEl.value} meters = ${(inputEl.value * 3.2808399).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.2808399).toFixed(3)} meters`
    
    litersGallonsEl.innerHTML = `${inputEl.value} liters = ${(inputEl.value * 0.264172052 ).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264172052 ).toFixed(3)} liters`
    
    kilogramsPoundsEl.innerHTML = `${inputEl.value} kilos = ${(inputEl.value * 2.20462262).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.20462262).toFixed(3)} kilos`
}
