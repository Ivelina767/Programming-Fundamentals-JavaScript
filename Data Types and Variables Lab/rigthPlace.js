function rigthPlace(string, char, string2){
let res = string.replace('_',char);
let output = res === string2? "Matched" : "Not Matched"
console.log(output);
}
rigthPlace('Str_ng', 'i', 'String')