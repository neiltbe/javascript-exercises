const sumAll = function(...args) {
if (typeof args[0] != "number" || typeof args[1] != "number"){
    return "ERROR"
}
let total = 0;
if (Number(args[0]) < 0 || Number(args[1]) < 0 ){
    return "ERROR"
}
else if (Number(args[0]) > Number(args[1]))
{
    for (let i = Number(args[0]); i > 0; i-- )
    {
        total = Number(total) + Number([i]);}
        return total;}
else {
for (let i = Number(args[1]); i > 0; i-- ){
    total = Number(total) + Number([i])
}
return total;
}}
// Do not edit below this line
module.exports = sumAll;
