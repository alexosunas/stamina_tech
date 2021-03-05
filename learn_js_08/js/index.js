let bitcoinAmount = 3.9;
let bitcoinValue = 45000.9;
let dogeAmount = 20;
let dogeValue = 0.05;

let bitcoinAmountFormatted = Math.floor(bitcoinAmount);
let bitcoinValueFormatted = Math.ceil(bitcoinValue);
let largestCryptoAmount = Math.max(bitcoinAmount, dogeAmount);

console.log('bitcoinAmountFormatted', bitcoinAmountFormatted);
console.log('bitcoinValueFormatted', bitcoinValueFormatted);

let totalCryptos = bitcoinAmount + dogeAmount;
let dogesToBitcoin = bitcoinValue / dogeValue;
let dollarsAfterCalculation = bitcoinValue * (bitcoinAmount - 9);

console.log(`The largest amount of one type of cryptos that I have is: ${largestCryptoAmount}`)
console.log(`Total Cryptos: ${totalCryptos}`);
console.log(`Doges to have 1 bitcoin: ${dogesToBitcoin}`);
console.log(`I have ${bitcoinAmount} bitcoins.
If I sell one, I still have ${dollarsAfterCalculation} dollars in bitcoins.`);