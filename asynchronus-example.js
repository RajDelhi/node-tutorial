// **** Here we will show example as Node is asunchrnous language *************

console.log("First statement");
var a = 10;
var b = 0;

setTimeout(()=>{
    // This statement will print after 2 sec but next statement will not wait for it to execute
    console.log("Second statement");
    b = 20;

},2000)


var c = a + b;
console.log("Third statement");
console.log("Added value "+c);