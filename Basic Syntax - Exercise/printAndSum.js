function printAndSum(min, max) {
    let sum = 0;
    let output = '';
    for (let i = min; i <= max; i++) {
        sum += i;
        output += `${i} `;

    }
    console.log(output);
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10)