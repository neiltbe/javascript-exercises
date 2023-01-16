const convertToCelsius = function(degree) {
degree = Number(degree);
let celsius =  (5/9) * (degree - 32)
if (celsius == 0.0)
{
return 0;
}
else
{
return Number(celsius.toFixed(1));
}
};

const convertToFahrenheit = function(degree) {
degree = Number(degree);
let f = (degree * (9/5)) + 32;
if (f == 0.0){
return 0;
}
else {
return Number(f.toFixed(1));
}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
