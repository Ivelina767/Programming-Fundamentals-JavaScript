function sumDigits(number){

    let numberAsString = number.toString();
let sum = 0;
let numberOfDigits = numberAsString.length;
for(let i = 0; i < numberOfDigits; i++){

let currentDigits = Number(numberAsString[i]);

sum += currentDigits;
}
   console.log(sum);
}
sumDigits(245678);