
//declared promise 
var data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        var checkLogin = 0;
            if(checkLogin == 1){
                resolve("You are logged in!");
            }else{
                reject("Please enter valid credentials!");
            }
    }, 2000)
})

// calling promise
data.then((result)=>{
    console.log("Result "+result);
}).catch((result)=>{
    console.log("Result "+result);
})



















