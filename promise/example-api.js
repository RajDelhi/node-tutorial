
var data = fetch("https://dummyjson.com/products/1");

data.then((items)=>{
    console.log(items);
    return items.json();
}).then((itemData)=>{
       
       console.log(itemData);
}).catch((error)=>{
    console.log("Unable to connect given API");
})

