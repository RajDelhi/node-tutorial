// *****************foreach loop ****************

const api_data =  require('./api-data')
api_data.forEach((data)=>{
    var detail = `Name is : ${data.name}, City Name is : ${data.city_name} and population : ${data.population} `
    console.log(detail);
})


// *****************if else ****************

var a = 10
var b = 20
var status = a > b ? "A is bigger than B":"B is bigger than A";
console.log(status);

if(a > b){
     status = "A is bigger than B"
}else{
    status = "B is bigger than A"
}
console.log(status);