var number = [1, 400, 12, 34, 5];
var len = number.length;
var i = 0
var total = 0

while (i < len) {
  console.log(number[i]);
  total += number[i];
  i = i + 1;
}

console.log(`total: ${total}`);