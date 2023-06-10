/* var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}
foo() // 3
console.log(x); //1 */

var x = 1;
function foo(x, y = function() { x = 2; }) {
  // var x = 3;
  y();
  console.log(x);
}
foo() // 3
console.log(x); //1
