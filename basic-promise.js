// ******** This is basic code of Promise function *************

var a =  10
var b =  20
var addition = ''
var waitingData = new Promise((resolve, reject)=>{
                 setTimeout(()=>{
                    b = 150
                    if(b == 50){
                        resolve(b);     
                    }else{
                        reject(100);
                    }
                 }, 3000)
})

waitingData.then((value)=>{
    addition = a + value
    console.log(`Second addition : ${addition} `)

}).catch(function(value){
    console.log('Some error has occurred : ');
    addition = a + value
    console.log(`Rejection addition : ${addition} `)
})

addition = a + b
console.log(`First addition : ${addition} `)


