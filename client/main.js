

const moneroToBitcoin = () => {
axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XMR&to_currency=BTC&apikey=QNZDYIH04YHYPSUW')
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-convert-display').appendChild(display)
}
)}

const moneroToDollar = () => {
    axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XMR&to_currency=USD&apikey=QNZDYIH04YHYPSUW')
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-convert-display').appendChild(display)
}
)}

const moneroToEthereum = () => {
    axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XMR&to_currency=ETH&apikey=QNZDYIH04YHYPSUW')
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-convert-display').appendChild(display)
}
)}
const moneroMonthly = () => {
    axios.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=XMR&market=USD&apikey=QNZDYIH04YHYPSUW')
.then(res => {
     let display = document.createElement('h3')
display.textContent = JSON.stringify(res.data)
    
console.log(res.data)

document.getElementById('monero-monthly').appendChild(display)
}
)}



document.getElementById('XMR-ETH-button').addEventListener('click', moneroToEthereum)
document.getElementById('XMR-BTC-button').addEventListener('click', moneroToBitcoin) 
document.getElementById('XMR-USD-button').addEventListener('click', moneroToDollar)
document.getElementById('XMR-monthly-button').addEventListener('click', moneroMonthly)

//   JSON.stringify
// API key: QNZDYIH04YHYPSUW