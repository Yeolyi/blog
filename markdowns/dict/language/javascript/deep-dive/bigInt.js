// ECMAScript2020(ES11)
console.log(2 ** 100); // 1.2676506002282294e+30
console.log(BigInt(2 ** 100)); // 1267650600228229401496703205376n
// console.log(10n + 1); // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(10n + 1n);
