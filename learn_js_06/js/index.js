let bitcoinAmount = 3;
let bitcoinValue = 45000;
let dogeAmount = 20;
let dogeValue = 0.05;

let totalCryptos = bitcoinAmount + dogeAmount;
let dogesToBitcoin = bitcoinValue / dogeValue;
let dollarsAfterCalculation = bitcoinValue * (bitcoinAmount - 1);

console.log(`Total Cryptos: ${totalCryptos}`);
console.log(`Doges to have 1 bitcoin: ${dogesToBitcoin}`);
console.log(`I have ${bitcoinAmount} bitcoins.
If I sell one, I still have ${dollarsAfterCalculation} dollars in bitcoins.`);