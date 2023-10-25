var user_data = require('./api-data.js')
console.log(user_data[5].calculation())
//*****Exmaple Filter function : Filter works only on Arr  */
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
//************* first way *****************/
var bigCity = [];
for(var i= 0; i< cities.length ; i++ ){
    if(cities[i].population > 3000000){
        bigCity.push(cities[i]);
    }
}
console.log(bigCity);

//********Second Way*********************************/
var bigCityNew = cities.filter((value)=>{
        return value.population > 3000000; 
})
console.log(bigCityNew);
