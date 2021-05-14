// array, object

var k = function() {
  console.log(1 + 1);
  console.log(1 + 2);
}

console.log(k);
k();

var a = [k];
a[0]();

var o = {
  func: k
}
o.func();

// var i =
//   if (true) {
//     console.log(1)
//   };

// var j =
//   while (true) {
//     console.log(1);
//   };