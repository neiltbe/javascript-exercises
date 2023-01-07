const repeatString = function(string, num) {
let word = string;
let number = num;
let blank = ""
if (num == 0) {
    return ""
}

if (num < 1) {
    return "ERROR"
}
for (let i = 0; i < number; i++) {
blank += word;
}
return blank;
};

// Do not edit below this line
module.exports = repeatString;
