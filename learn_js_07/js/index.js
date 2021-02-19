let bitcoinAmount = parseInt('3.5lol');
let bitcoinValue = parseFloat('45000.5lol');
let dogeAmount = 20;
let dogeValue = 0.04999.toFixed(2);

console.log('bitcoinAmount', bitcoinAmount);
console.log('bitcoinValue', bitcoinValue);
console.log('dogeValue', dogeValue);

let totalCryptos = bitcoinAmount + dogeAmount;
let dogesToBitcoin = bitcoinValue / dogeValue;
let dollarsAfterCalculation = bitcoinValue * (bitcoinAmount - 1);

console.log(`Total Cryptos: ${totalCryptos}`);
console.log(`Doges to have 1 bitcoin: ${dogesToBitcoin}`);
console.log(`I have ${bitcoinAmount} bitcoins.
If I sell one, I still have ${dollarsAfterCalculation} dollars in bitcoins.`);