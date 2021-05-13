// has name
function a() {
  console.log('A');
}

// no-name (anonymous function)
var b = function() {
  console.log('B');
}

a();
b();

function slowfunc(callback) {
  callback();
}

slowfunc(a);