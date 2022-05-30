// const apiKey = process.env.API_KEY
import {apiKey} from './config.js'

const moneroToBitcoin = () => {
     console.log(`hello there`)
axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XMR&to_currency=BTC&apikey=${apiKey}`)
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-convert-display').appendChild(display)
}
)}

const moneroToDollar = () => {
    axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XMR&to_currency=USD&apikey=${apiKey}`)
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-convert-display').appendChild(display)
}
)}

const moneroToEthereum = () => {
    axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XMR&to_currency=ETH&apikey=${apiKey}`)
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-convert-display').appendChild(display)
}
)}
const moneroMonthly = () => {
    axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=XMR&market=USD&apikey=${apiKey}`)
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-monthly').appendChild(display)
}
)}

const logout = () => {
     location.href = 'http://localhost:4004/logout'
}



document.getElementById('XMR-ETH-button').addEventListener('click', moneroToEthereum)
document.getElementById('XMR-BTC-button').addEventListener('click', moneroToBitcoin) 
document.getElementById('XMR-USD-button').addEventListener('click', moneroToDollar)
document.getElementById('XMR-monthly-button').addEventListener('click', moneroMonthly)
document.getElementById('logout-button').addEventListener('click', logout)

//   JSON.stringify
