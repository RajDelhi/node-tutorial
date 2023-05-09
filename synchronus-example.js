// **** Here we will show example as Node wait data to execute then process *************
var a = 10;
var b = 0;

var promiseObj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b = 50;
        resolve(b);
    },2000)
    
})

promiseObj.then((b)=>{
    var c = a+b;
    console.log(c);
})

//var c = a+b;
//console.log(c);
